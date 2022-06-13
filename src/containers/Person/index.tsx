import React from 'react';
import { FaEye } from 'react-icons/fa';
import { CenterItems } from './style';
import { GiBodyHeight } from 'react-icons/gi';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import {
  Spinner,
  Jumbotron,
  BackButton,
  CardStarWars,
  FlexContainer,
} from 'components';
import { localizedStrings } from 'constants/localizedStrings';
import { useSelectorStarWars } from 'Context/StarWarsProvider';

export function Person() {
  const { isLoading, people } = useSelectorStarWars();

  const MemorizedPeople = React.memo(() => {
    return (
      <FlexContainer>
        {React.Children.toArray(
          people?.map((person) => {
            return (
              <CardStarWars src={localizedStrings.images[person.name]} alt={person.name}>
                <h2>{localizedStrings.name} {person.name}</h2>
                <p>{localizedStrings.eyes} {person.eye_color}</p>
                <CenterItems>
                  <FaEye color={person.eye_color === 'blue-gray' ? '#6FDCF6' : person.eye_color} />
                </CenterItems>
                <p>{localizedStrings.height} {person.height}</p>
                <CenterItems>
                  <GiBodyHeight />
                  {person.height} cm
                </CenterItems>
                <p>{localizedStrings.gender} </p>
                {person.gender === 'female' ? <BsGenderFemale /> : <BsGenderMale />}
              </CardStarWars>
            )
          })
        )}
      </FlexContainer>
    )
  })

  return (
    <React.Fragment>
      <BackButton />
      <Jumbotron title={localizedStrings.People} subTitle={localizedStrings.listCharactersStarWars} />
      {isLoading ? <Spinner /> : <MemorizedPeople />}
    </React.Fragment>
  )
}