import React, { useState, useEffect } from "react";
import {
  Spinner,
  Jumbotron,
  BackButton,
  ProgressBar,
  CardStarWars,
  FlexContainer,
} from "components";
import { localizedStrings } from "constants/localizedStrings";
import { useSelectorStarWars } from "Context/StarWarsProvider";

interface ShipInfo {
  speeds: number[];
  creditsCost: number[];
  shipsLength: number[];
  passengers: number[];
}

export function StarShip() {
  const { isLoading, starships } = useSelectorStarWars()
  const [maxSpeed, setMaxSpeed] = useState<number>(0);
  const [maxCreditCost, setMaxCreditCost] = useState<number>(0);
  const [maxShipLength, setMaxShipLength] = useState<number>(0);
  const [maxPassengers, setMaxPassengers] = useState<number>(0);

  const returnValueOrZero = (number: number) => isNaN(Number(number)) ? 0 : number;

  const MemorizedStarShips = React.memo(() => {
    return (
      <FlexContainer>
        {React.Children.toArray(
          starships?.map((ship) => {
            return (
              <CardStarWars src={localizedStrings.images[ship.name]} alt={ship.name}>
                <h2>{ship.name}</h2>
                <p>{localizedStrings.costInCredits} {ship.cost_in_credits} </p>
                <ProgressBar color="#ffc400" max={maxCreditCost} value={returnValueOrZero(parseInt(ship.cost_in_credits))}></ProgressBar>
                <p>{localizedStrings.maxAtmosphericSpeed} {ship.max_atmosphering_speed} </p>
                <ProgressBar color="#ff0000" max={maxSpeed} value={returnValueOrZero(parseInt(ship.max_atmosphering_speed))}></ProgressBar>
                <p>{localizedStrings.passengers} {ship.passengers} </p>
                <ProgressBar color="#0051ff" max={maxPassengers} value={Math.round(returnValueOrZero(Number(ship.passengers)))}></ProgressBar>
                <p>{localizedStrings.shipLength} {ship.length} </p>
                <ProgressBar color="#15ff00" max={maxShipLength} value={Math.round(returnValueOrZero(Number(ship.length)))}></ProgressBar>
              </CardStarWars>
            )
          })
        )}
      </FlexContainer>
    )
  })

  useEffect(() => {
    try {
      if (!starships)
        return

      const getOnlyNumbers = (numbers: number[]): number[] => numbers.filter((number) => !isNaN(Number(number)))

      const initialValues: ShipInfo = {
        creditsCost: [0],
        passengers: [0],
        shipsLength: [0],
        speeds: [0],
      }

      const {
        creditsCost, passengers, shipsLength, speeds
      } = starships
        .reduce<ShipInfo>((acc, current) => {
          return {
            creditsCost: [...acc.creditsCost, Number(current.cost_in_credits)],
            passengers: [...acc.passengers, Number(current.passengers)],
            shipsLength: [...acc.shipsLength, Number(current.length)],
            speeds: [...acc.speeds, Number(current.max_atmosphering_speed)],
          }
        }, initialValues)

      setMaxSpeed(Math.max(...getOnlyNumbers(speeds)));
      setMaxCreditCost(Math.max(...getOnlyNumbers(creditsCost)));
      setMaxPassengers(Math.round(Math.max(...getOnlyNumbers(passengers))));
      setMaxShipLength(Math.round(Math.max(...getOnlyNumbers(shipsLength))));

    } catch (error) {
      return
    }
  }, [starships])

  return (
    <React.Fragment>
      <BackButton />
      <Jumbotron title={localizedStrings.starShips} subTitle={localizedStrings.listShipsStarWars} />
      {isLoading ? <Spinner /> : <MemorizedStarShips />}
    </React.Fragment>
  )
}