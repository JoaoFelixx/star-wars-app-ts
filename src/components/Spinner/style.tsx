import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const Loader = styled.div`
  border: 1em solid transparent;
  border-radius: 50%;
  border-top: 1em solid #fff;
  width: 150px;
  height: 150px;

  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
	@-webkit-keyframes spin {
  	0% { -webkit-transform: rotate(0deg); }
  	100% { -webkit-transform: rotate(360deg); }
	}
	@keyframes spin {
  	0% { transform: rotate(0deg); }
  	100% { transform: rotate(360deg); }
	}
`;

export { Flex, Loader }