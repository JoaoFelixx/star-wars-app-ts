import React from 'react';
import { Flex } from './style';
import { Footer, CardHome, Jumbotron } from 'components';

export function Home() {
	return (
		<React.Fragment>
			<Jumbotron title="Star Wars" subTitle="Site de informações Star Wars" />
			<Flex>
	      <CardHome
	        title='Naves Estelares'
	        description='Veja as naves mais famosas da saga'
	        src="./img/ships/millennium-falcon.jpg"
	        alt="millennium falcon"
	        link='/starships' />

	      <CardHome
	        title='Personagens'
	        description='Veja os personagens mais icônicos de Star Wars'
	        src="./img/persons/darth-vader.jpg"
	        alt="a"
	        link='/people' />

	      <CardHome
	        title='Filmes'
	        description='Conheça alguns filmes da franquia'
	        src="./img/persons/darth-vader-lego.jpg"
	        alt="a"
	        link='/films' />
					
	      <CardHome
	        title='Veículos'
	        description='Veja alguns dos veiculos mais famosos do cinema'
	        src="./img/vehicles/at-st.jpg"
	        alt="millennium falcon"
	        link='/vehicles' />

	      <CardHome
	        title='Espécies'
	        description='Veja algumas das espécies mais peculiares'
	        src="./img/persons/yoda.jpg"
	        alt="millennium falcon"
	        link='/species' />

	      <CardHome
	        title='Planetas'
	        description='Conheça alguns dos planetas (fictícios) mais famosos já vistos'
	        src="./img/planets/coruscant.jpg"
	        alt="millennium falcon"
	        link='/planets' />
	    </Flex>
	    <Footer />
    </React.Fragment>
	)
}