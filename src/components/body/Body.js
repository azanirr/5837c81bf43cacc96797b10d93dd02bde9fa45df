import React from 'react';
import styled from 'styled-components';
import Products from '../product/Product';

function Body () {
	
	const BodyDiv = styled.div`
		padding-top: 180px;
		
	`
	
	const DivProduct = styled.div`
		display: grid;
		width: 90%;
		margin: 0 auto;
  		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	
		@media only screen and (max-width: 700px){
		grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
		}
	`
	const DivButton = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: center;
		`
	
	const ButtonLunch = styled.button`
		box-sizing: border-box;
		padding: 16px 0;
		color: white;
		background: #424749;
		border: none;
		border-radius: 6px;
		outline: #f1f1f2;
		cursor: pointer;
		border-bottom-right-radius: 0px;
		border-top-right-radius: 0px;
		margin: 0 0 0 0;
		font-size: 20px;
		width: 300px;
		
		@media only screen and (max-width: 700px){
			padding: 10px 0;
			margin: 0 0 0 0;
			width: 45%;
		}
		`
	const ButtonDinner = styled.button`
		box-sizing: border-box;
		padding: 16px 0;
		color: #424749;
		width:300px;
		background: white;
		border: 1px solid #424749;
		border-radius: 6px;
		border-bottom-left-radius: 0;
		border-top-left-radius: 0;
		outline: #f1f1f2;
		cursor: pointer;
		font-size: 20px;

		@media only screen and (max-width: 700px){
			padding: 10px 0;
			width: 45%;
		}
		`
	
	return(
		<BodyDiv>
			<DivButton>
				<ButtonLunch>LUNCH</ButtonLunch>
				<ButtonDinner disabled>DINNER</ButtonDinner>
			</DivButton>
			<DivProduct>
				<Products />
				<Products />
				<Products />
				<Products />
				<Products />
				<Products />
			</DivProduct>
		</BodyDiv>
	)
}

export default Body;