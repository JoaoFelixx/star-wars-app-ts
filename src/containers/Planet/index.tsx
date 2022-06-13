import React, { useEffect, useState } from 'react';
import {
  Spinner,
  Jumbotron,
  BackButton,
  ProgressBar,
  CardStarWars,
  FlexContainer,
} from 'components';
import { localizedStrings } from 'constants/localizedStrings';
import { useSelectorStarWars } from 'Context/StarWarsProvider';

interface PlanetsInfo {
  diameters: number[];
  populations: number[];
  surfaceWaters: number[];
  rotationTimes: number[];
  orbitPeriods: number[];
}

export function Planet() {
  const { planets, isLoading } = useSelectorStarWars();
  const [maxDiameter, setMaxDiameter] = useState<number>(0);
  const [maxPopulation, setMaxPopulation] = useState<number>(0);
  const [maxOrbitPeriod, setMaxOrbitPeriod] = useState<number>(0);
  const [maxSurfaceWater, setMaxSurfaceWater] = useState<number>(0);
  const [maxRotationTime, setMaxRotationTime] = useState<number>(0);

  const MemorizedPlanets = React.memo(() => {
    return (
      <FlexContainer>
        {React.Children.toArray(
          planets?.map((planet) => {
            return (
              <CardStarWars src={localizedStrings.images[planet.name]} alt={planet.name}>
                <h2>{planet.name}</h2>
                <p>Diamêtro: {planet.diameter} </p>
                <ProgressBar value={planet.diameter} max={maxDiameter} color='#0084ff'></ProgressBar>
                <p>População: {planet.population}</p>
                <ProgressBar value={planet.population} max={maxPopulation} color='#ff00d4'></ProgressBar>
                <p>Periodo de órbita: {planet.orbital_period} </p>
                <ProgressBar value={planet.orbital_period} max={maxOrbitPeriod} color='#ff7300'></ProgressBar>
                <p>Água na superficie: {planet.surface_water} </p>
                <ProgressBar value={planet.surface_water} max={maxSurfaceWater} color='#0004ff'></ProgressBar>
                <p>Tempo de rotação: {planet.rotation_period}</p>
                <ProgressBar value={planet.rotation_period} max={maxRotationTime} color='#00ff00'></ProgressBar>
              </CardStarWars>
            )
          })
        )}
      </FlexContainer>
    )
  })

  useEffect(() => {
    try {
      if (!planets)
        return

      const initialValues: PlanetsInfo = {
        diameters: [0],
        populations: [0],
        orbitPeriods: [0],
        rotationTimes: [0],
        surfaceWaters: [0],
      };

      const {
        diameters, orbitPeriods, populations, rotationTimes, surfaceWaters
      } = planets
        .filter((planet) => (!isNaN(Number(planet.surface_water)) && !isNaN(Number(planet.population))))
        .reduce<PlanetsInfo>((acc, current) => {
          return {
            diameters: [...acc.diameters, Number(current.diameter)],
            populations: [...acc.populations, Number(current.population)],
            surfaceWaters: [...acc.surfaceWaters, Number(current.surface_water)],
            orbitPeriods: [...acc.orbitPeriods, Number(current.orbital_period)],
            rotationTimes: [...acc.rotationTimes, Number(current.rotation_period)]
          }
        }, initialValues)

      setMaxDiameter(Math.max(...diameters));
      setMaxOrbitPeriod(Math.max(...orbitPeriods));
      setMaxPopulation(Math.max(...populations));
      setMaxRotationTime(Math.max(...rotationTimes));
      setMaxSurfaceWater(Math.max(...surfaceWaters));

    } catch (error) {
      return
    }
  }, [planets]);

  return (
    <React.Fragment>
      <BackButton />
      <Jumbotron title='planetas' subTitle='Lista de planetas Star Wars' />
      {isLoading ? <Spinner /> : <MemorizedPlanets />}
    </React.Fragment>
  )
}