import React, { useEffect, useState } from "react";
import { localizedStrings } from "constants/localizedStrings";
import { useSelectorStarWars } from "Context/StarWarsProvider";
import {
  Spinner,
  Jumbotron,
  BackButton,
  CardStarWars,
  FlexContainer,
  ProgressBar,
} from "components";
import { FaEye } from 'react-icons/fa';
import { GiBodyHeight } from 'react-icons/gi';

interface LifeAndHeightFromSpecies {
  ages: number[];
  heights: number[];
}

export function Specie() {
  const { isLoading, species } = useSelectorStarWars();
  const [maxAge, setMaxAge] = useState<number>(0);
  const [maxHeight, setMaxHeight] = useState<number>(0); 

  const MemorizedSpecies = React.memo(() => {
    return (
      <FlexContainer>
        {React.Children.toArray(
          species?.map(specie => {            
            if (specie.average_lifespan === 'unknown' || specie.average_lifespan === 'indefinite')       
              specie.average_lifespan = 'Desconhecido';
            return (
              <CardStarWars src={localizedStrings.images[specie.name]} alt={specie.name}>
                <h2>{specie.name}</h2>
                <div>
                  {React.Children.toArray(
                    specie.eye_colors.split(',').map((color) => {
                      return (
                        <FaEye color={color} />
                      )
                    })
                  )}
                </div>
                <p>Tempo de vida: {specie.average_lifespan}</p>
                <ProgressBar value={specie.average_lifespan} max={maxAge} color="#00ff00"></ProgressBar>
                <p>Altura: <GiBodyHeight /> {specie.average_height} cm </p>
                <ProgressBar value={specie.average_height} max={maxHeight} color="#ffff00"></ProgressBar>
              </CardStarWars>
            )
          })
        )}
      </FlexContainer>
    )
  })

  useEffect(() => {
    try {
      if (!species)
        return

      const { ages, heights } = species
        .filter((specie) => !isNaN(Number(specie.average_lifespan)))
        .reduce<LifeAndHeightFromSpecies>((acc, current) => {
          return {
            ages: [...acc.ages, Number(current.average_lifespan)],
            heights: [...acc.heights, Number(current.average_height)]
          }
        }, { ages: [0], heights: [0] })

      setMaxAge(Math.max(...ages));
      setMaxHeight(Math.max(...heights));

    } catch (error) {
      return
    }
  }, [species])

  return (
    <React.Fragment>
      <BackButton />
      <Jumbotron title="espécies" subTitle="Lista de espécies Star Wars" />
      {isLoading ? <Spinner /> : <MemorizedSpecies />}
    </React.Fragment>
  )
}