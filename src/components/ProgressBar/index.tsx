import styled from 'styled-components';

interface ProgressBarColor {
	color: string;
}

export const ProgressBar = styled.progress<ProgressBarColor>`
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