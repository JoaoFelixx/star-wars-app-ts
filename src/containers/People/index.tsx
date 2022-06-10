import React from 'react';
import { localizedStrings } from 'constants/localizedStrings';
import { useSelectorStarWars } from 'Context/StarWarsProvider';
import { Flex, CenterItems } from './style';
import { FaEye } from 'react-icons/fa';
import { GiBodyHeight } from 'react-icons/gi';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import {
  Footer,
  Spinner,
  Jumbotron,
  BackButton, 
  CardStarWars, 
} from 'components';

export function People() {
  const { isLoading, people } = useSelectorStarWars();

  const MemorizedCard = React.memo(() => {
    return (
      <Flex>
        {React.Children.toArray(
          people?.map((person) => {
            return (
              <CardStarWars src={localizedStrings.images[person.name]} alt={person.name}>
                <h2>Nome: {person.name}</h2>
                <p>Olhos: {person.eye_color}</p>
                <CenterItems>
                  <FaEye color={person.eye_color === 'blue-gray' ? '#6FDCF6' : person.eye_color} />
                </CenterItems>
                <p>Altura: {person.height}</p>
                <CenterItems>
                  <GiBodyHeight />
                  {person.height} cm
                </CenterItems>
                <p>Genêro: </p>
                {person.gender === 'female' ? <BsGenderFemale /> : <BsGenderMale /> }
              </CardStarWars>
            )
          })
        )}
      </Flex>
    )
  })

  return (
    <React.Fragment>
      <BackButton />
      <Jumbotron title="Pessoas" subTitle="Lista de pessoas Star Wars" />
      {isLoading ? <Spinner /> : <MemorizedCard />}
      <Footer />
    </React.Fragment>
  )
}