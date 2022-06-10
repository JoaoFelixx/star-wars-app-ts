import styled from 'styled-components';

const Card = styled.div`
	position: relative;
	background-color: #1c1c1ccc;
	color: #fff;
	width: 30%;
	height: auto;
	padding: 4px;
	margin: 10px;
	border: 1px solid #696969	;
	border-radius: 8px;
	
	@media (max-width: 740px) {
    width: 94%;
    padding: 0;
  }
`;

const Image = styled.img`
	width: 100%;
	height: auto;
	
	@media (max-width: 740px) { width: 100%; }
`;

const Title = styled.h2`
	text-align: center;
`;

const Button = styled.button`
 	background-color: #ffff00;
  padding: 5px 10px;
  font-size: 1.1em;
  font-weight: bold;
  color: #000;
  border: none;
  border-radius: 6px;
	width: 100%;
	text-decoration: none;
	cursor: pointer;
	text-align: center;
	&:hover {
		transition: 1s;
	 	background: #CFC100;
	}
`;

export {
	Card,
	Image,
	Title,
	Button,
}