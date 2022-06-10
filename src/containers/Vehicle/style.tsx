import styled from 'styled-components';

const Flex = styled.div`
	display: flex;
	flex-flow: wrap row;
	justify-content: space-evenly;
	align-items: center;

	h2 {
		color: #fff;
		text-align: center;
		font-size: 1.4em;
	}

	p {
		color: #fff;
		font-weight: bold;
		margin-bottom: 0.2em;
	} 
`;

export { Flex, }