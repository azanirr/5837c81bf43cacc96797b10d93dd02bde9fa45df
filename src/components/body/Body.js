import React, {useState} from 'react';
import styled from 'styled-components';
import Products from '../product/Product';

function Body () {
	
	const [price, setPrice] = useState(0),
		  [quantity, setQuantity] = useState(0),
		  [openCart, setOpenCart] = useState(false);
	
	const addPriceHandler = () => {
		setPrice(price + 35000);
		setQuantity(quantity + 1);
		setOpenCart(true);
	}
	
	
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
	
	const CartDiv = styled.div`
		position: fixed;
		bottom: 20px;
		right: 20px;
		border: none;
		outline: #f1f1f2;
		border-radius: 6px;
		background: #a23530;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		cursor: pointer;
		align-items: center;

		@media only screen and (max-width: 700px){
		bottom: 10px;
		right: 10px;
		left: 10px;
		}
		`
	
	const DivCol = styled.div`
		display: flex;
		flex-direction: column;
		margin: 0 100px 0 20px;

		@media only screen and (max-width: 700px){
		margin: 0 60px 0 20px;
		}
		`
	const H1 = styled.h1`
		color: white;
		margin-bottom: 0px;
		font-size: 18px;
		font-weight: 700;
		`
	const P = styled.p`
		margin-top: 5px;
		color: white;
		font-size: 14px;
		font-weight: 400;
		`
	const DivIcon = styled.div`
		margin: 0 20px;
		`
	
	const K = styled.h1`
		color: white;
		font-size: 18px;
		font-weight: 700;
	`
	
	let cart = (
		<CartDiv>
			<DivCol>
				<H1>{quantity} Items | Rp.{price}</H1>
				<P>Termasuk ongkos kirim</P>
			</DivCol>
			<DivIcon>
				<K>KER</K>
			</DivIcon>
		</CartDiv>
	)
	
	if(!openCart){
		cart = "";
	}
	
	return(
		<BodyDiv>
			<DivButton>
				<ButtonLunch>LUNCH</ButtonLunch>
				<ButtonDinner disabled>DINNER</ButtonDinner>
			</DivButton>
			<DivProduct>
				<Products addPrice={addPriceHandler} />
				<Products addPrice={addPriceHandler} />
				<Products addPrice={addPriceHandler} />
				<Products addPrice={addPriceHandler} />
				<Products addPrice={addPriceHandler} />
				<Products addPrice={addPriceHandler} />
			</DivProduct>
			{cart}
		</BodyDiv>
	)
}

export default Body;