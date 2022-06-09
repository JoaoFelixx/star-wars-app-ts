import styled from 'styled-components';

interface ProgressBarColor {
	color: string;
}

const ProgressBar = styled.progress<ProgressBarColor>`
	border-radius: 1px; 
  width: 100%;
  height: 1em;
  margin-bottom: 0.3em;

	&::-webkit-progress-bar {
  	background-color: #fff;
	}
	
	&::-webkit-progress-value {
	  background-color: ${props => props.color};
	}
`;

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

export { Flex, ProgressBar, }