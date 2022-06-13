import React from 'react';
import { Flex } from './style';
import { Footer, CardHome, Jumbotron } from 'components';
import { localizedStrings } from 'constants/localizedStrings';

export function Home() {
	return (
		<React.Fragment>
			<Jumbotron title={localizedStrings.starWars} subTitle={localizedStrings.starWarsInfoSite} />
			<Flex>
				<CardHome
					title={localizedStrings.starShips}
					src="./img/ships/millennium-falcon.jpg"
					alt={localizedStrings.millenniumFalcon}
					link='/starships' />

				<CardHome
					title={localizedStrings.characters}
					src="./img/persons/darth-vader.jpg"
					alt={localizedStrings.darthVader}
					link='/people' />

				<CardHome
					title={localizedStrings.Movies}
					src="./img/persons/darth-vader-lego.jpg"
					alt={localizedStrings.darthVader}
					link='/films' />

				<CardHome
					title={localizedStrings.Vehicles}
					src="./img/vehicles/at-st.jpg"
					alt={localizedStrings.atSt}
					link='/vehicles' />

				<CardHome
					title={localizedStrings.Species}
					src="./img/persons/yoda.jpg"
					alt={localizedStrings.yoda}
					link='/species' />

				<CardHome
					title={localizedStrings.Planets}
					src="./img/planets/coruscant.jpg"
					alt={localizedStrings.coruscant}
					link='/planets' />
			</Flex><br />
			<Footer />
		</React.Fragment>
	)
}