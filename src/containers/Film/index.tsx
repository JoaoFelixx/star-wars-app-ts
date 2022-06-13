import React from 'react';
import {
  Spinner,
  Jumbotron,
  BackButton,
  CardStarWars,
  FlexContainer,
} from 'components';
import { localizedStrings } from 'constants/localizedStrings';
import { useSelectorStarWars } from 'Context/StarWarsProvider';

export function Film() {
  const { isLoading, films } = useSelectorStarWars();

  const MemorizedFilms = React.memo(() => {
    return (
      <FlexContainer>
        {React.Children.toArray(
          films?.map(({ release_date, title, director, producer }) => {
            return (
              <CardStarWars src={localizedStrings.images[title]} alt={title}>
                <h2>{title}</h2><br />
                <p>{localizedStrings.producer} {producer}</p>
                <p>{localizedStrings.director} {director}</p>
                <p>{localizedStrings.releaseDate} {release_date}</p>
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
      <Jumbotron title={localizedStrings.movies} subTitle={localizedStrings.listMoviesStarWars} />
      {isLoading ? <Spinner /> : <MemorizedFilms />}
    </React.Fragment>
  )
}