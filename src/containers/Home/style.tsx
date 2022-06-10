import styled from 'styled-components';

const Flex = styled.div` 
	display: flex;
  justify-content: space-around;
  flex-flow: wrap row;
	align-items: center;

  @media (max-width: 740px) {
    flex-direction: column;
  }
`;

export { Flex };