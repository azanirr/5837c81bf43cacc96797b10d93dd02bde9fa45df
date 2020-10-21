import React, {useState} from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import Products from '../product/Product';
import ModalLocation from '../modalLocation/ModalLocation';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import numeral from 'numeral';

function Body (props) {
	
	const {product} = props;
	
	const [price, setPrice] = useState(0),
		  [quantity, setQuantity] = useState(0),
		  [openCart, setOpenCart] = useState(false),
		  [modal, setModal] = useState(false)
	
	const addPriceHandler = (val) => {
		setPrice(price + val);
		setQuantity(quantity + 1);
		setOpenCart(true);
	}
	
	const onChange = (value) => {
		setModal(value);
		console.log("modal is " + modal);
	}
	
	
	
	let cart = (
		<DivLinear>
		<CartDiv>
			<DivCol>
				<H1>{quantity} Items | Rp.{numeral(price).format('0,0')}</H1>
				<P>Termasuk ongkos kirim</P>
			</DivCol>
			<DivIcon onClick={() => onChange(true)}>
				<ShoppingCartIcon style={{fill: "white"}}/>
				<ArrowForwardIosIcon style={{fill: "white"}}/>
			</DivIcon>
		</CartDiv>
		</DivLinear>
	)
	
	if(!openCart){
		cart = "";
	}
	
	let modale = "";
	
	if(modal){
		modale= (
		<ModalLocation 
			open={modal}
			onClose={() => onChange(false)}
			/>
	)
	}
	
	return(
		<BodyDiv>
			<DivButton>
				<ButtonLunch>LUNCH</ButtonLunch>
				<ButtonDinner disabled>DINNER</ButtonDinner>
			</DivButton>
			<DateNow>Wednesday, 21 Oct 2020</DateNow>
			<DivProduct>
				{product.map((list) => {
					return(
						<Products 
							key={list.id}
							list={list}
							addPrice={addPriceHandler} />
					)
				})}
				
			</DivProduct>
			{cart}
			{modale}
		</BodyDiv>
	)
}
				
const DateNow = styled.h1`
		color: #424749;
		margin: 10% 0 0 100px;
		font-size: 18px;
		font-weight: 700;
		
		@media only screen and (max-width: 700px){
		margin: 10% 0 0 5%;
		}		`

const DivLinear = styled.div`
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
		position: fixed;
		bottom: 0;
		right: 0;
		height: 100px;
		width: 30%;

		@media only screen and (max-width: 700px){
		width: 100%;
		}
	`

const BodyDiv = styled.div`
		padding-top: 180px;
		padding-bottom: 100px;
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
		display: flex;
		cursor: pointer;
		flex-direction: row;
		align-items: center;
		`
	

const mapStateToProps = state => {
    return {
        product: state.product,
    };
}

export default connect(mapStateToProps, null)(Body);