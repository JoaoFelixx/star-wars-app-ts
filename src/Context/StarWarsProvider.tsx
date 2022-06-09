import {
  useState,
  useEffect,
  useContext,
  createContext,
} from 'react';
import {
  Films,
  Person,
  Species,
  Vehicle,
  Planets,
  Provider,
  Starship,
  FilmsRequest,
  PeopleRequest,
  PlanetsRequest,
  SpeciesRequest,
  StarshipRequest,
  VehiclesRequest,
} from 'interfaces';
import { api } from 'services';

interface StarWarsApiProvider {
  films?: Films[];
  people?: Person[];
  species?: Species[];
  planets?: Planets[];
  vehicles?: Vehicle[];
  starships?: Starship[];
  isLoading: boolean;
}

const defaultValues: StarWarsApiProvider = {
  isLoading: true,
}

const Context = createContext<StarWarsApiProvider>(defaultValues);

const useSelectorStarWars = () => useContext(Context);

function StarWarsProvider({ children }: Provider) {
  const [apiData, setApiData] = useState<StarWarsApiProvider>(defaultValues);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const requests = await Promise.all([
          api.get<SpeciesRequest>('/species'),
          api.get<VehiclesRequest>('/vehicles'),
          api.get<PeopleRequest>('/people'),
          api.get<StarshipRequest>('/starships'),
          api.get<FilmsRequest>('/films'),
          api.get<PlanetsRequest>('/planets')
        ])

        const keys = ["species", "vehicles", "people", "starships", "films", "planets"];

        const starWarsData = requests.reduce((acc, current, index) => {
          const data = {
            [keys[index]]: current.data.results
          }

          acc = structuredClone({ ...acc, ...data });

          return acc;

        }, defaultValues)

        setApiData(starWarsData);

      } catch (error) {
        return
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  return (
    <Context.Provider value={{ ...apiData, isLoading }}>
      {children}
    </Context.Provider>
  )
}

export { useSelectorStarWars, StarWarsProvider };