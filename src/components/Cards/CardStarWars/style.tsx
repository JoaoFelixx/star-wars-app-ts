import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  background-color: #1c1c1ccc;
  flex-flow: wrap column;
  margin-bottom: 2em;
  padding: 1em;

  @media (min-width: 2560px) { width: 20%; }

  @media (min-width: 1024px) { width: 29%; }

  @media (max-width: 768px) { width: 42%; }

  @media (max-width: 480px) { width: 80%; }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 50%;  
`;

export { Flex, Image };