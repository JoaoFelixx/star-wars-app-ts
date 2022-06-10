import React from 'react';
import { localizedStrings } from 'constants/localizedStrings';
import { useSelectorStarWars } from 'Context/StarWarsProvider';
import { 
  Footer,
  Spinner, 
  Jumbotron, 
  BackButton, 
  CardStarWars,
  FlexContainer,
} from 'components';

export function Film() {
  const { isLoading, films } = useSelectorStarWars();

  const MemorizedFilms = React.memo(() => {
    return (
      <FlexContainer>
        {React.Children.toArray(
          films?.map(({ release_date, title, director, producer }) => {
            return (
              <CardStarWars src={localizedStrings.images[title]} alt={title}>
                <h2>{title}</h2><br/>
                <p>Produção: {producer}</p>
                <p>Diretor: {director}</p>
                <p>Data de lançamento: {release_date}</p>
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
      <Jumbotron title='filmes' subTitle='Lista de Filmes Star Wars' />
      {isLoading ? <Spinner /> : <MemorizedFilms />}
      <Footer />
    </React.Fragment>
  )
}