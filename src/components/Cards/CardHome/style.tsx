import styled from 'styled-components';

const Card = styled.div`
	position: relative;
	background-color: #1c1c1ccc;
	color: #fff;
	width: 32%;
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
	 background: #E7C408;
	 width: 100%;
   border-radius: 20px;
   color: #FFFFFF;
   font-family: Brush Script MT;
   font-size: 20px;
   font-weight: 30px;
   padding: 4px;
   box-shadow: 1px 1px 20px 0 #000;
   border: solid #337FED 1px;
   text-decoration: none;
   display: inline-block;
   cursor: pointer;
   text-align: center;
   &:hover {
	   	border: solid #337FED 1px;
	   	background: #A69E08;
	   	border-radius: 20px;
	   	text-decoration: none;
   }
`;

export {
	Card,
	Image,
	Title,
	Button,
}