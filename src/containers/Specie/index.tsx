import React, { useEffect, useState } from "react";
import {
  Spinner,
  Jumbotron,
  BackButton,
  ProgressBar,
  CardStarWars,
  FlexContainer,
} from "components";
import { FaEye } from 'react-icons/fa';
import { GiBodyHeight } from 'react-icons/gi';
import { localizedStrings } from "constants/localizedStrings";
import { useSelectorStarWars } from "Context/StarWarsProvider";

interface LifeAndHeightFromSpecies {
  ages: number[];
  heights: number[];
}

interface ColorEyes {
  [index: string]: string;
}

export function Specie() {
  const { isLoading, species } = useSelectorStarWars();
  const [maxAge, setMaxAge] = useState<number>(0);
  const [maxHeight, setMaxHeight] = useState<number>(0);

  const MemorizedSpecies = React.memo(() => {
    const colorEyeNotRegistered: ColorEyes = {
      "hazel": "#ad8e00",
      "amber": "#ff9100",
      "golden": "#ffd900"
    };

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
                        <FaEye color={colorEyeNotRegistered[color.trim()] || color} />
                      )
                    })
                  )}
                </div>
                <p>{localizedStrings.averageLifeSpan} {specie.average_lifespan}</p>
                <ProgressBar value={specie.average_lifespan} max={maxAge} color="#00ff00"></ProgressBar>
                <p>{localizedStrings.height} <GiBodyHeight /> {specie.average_height} {localizedStrings.cm} </p>
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
      <Jumbotron title={localizedStrings.species} subTitle={localizedStrings.listSpeciesStarWars} />
      {isLoading ? <Spinner /> : <MemorizedSpecies />}
    </React.Fragment>
  )
}