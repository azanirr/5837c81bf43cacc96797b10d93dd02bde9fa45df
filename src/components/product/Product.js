import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
import AddIcon from '@material-ui/icons/Add';
import numeral from 'numeral';

function Product (props) {

	const { addPrice, list } = props;
	
	const price = list.price;
		
	return(
		<Card>
			<Image src={list.image} alt="guitar"/>
			<RatingContainer>
				<PRate>{list.rating}</PRate>	
				<StarRatings
					  rating={Number(list.rating)}
					  starRatedColor="#f9423a"
					  numberOfStars={5}
					  name='rating'
					  starDimension="16px"
      				  starSpacing="4px"
				/>
			</RatingContainer>
			<Header>{list.title}</Header>
			<Para>{list.from}</Para>
			<DivPrice>
				<Header>Rp.{numeral(price).format('0,0')}</Header>
				<Button onClick={() => addPrice(Number(list.price))}>
					<p style={{margin: "0 5px 0 0"}}>ADD</p>
					<AddIcon style={{fontSize: "22px"}}/>
				</Button>
			</DivPrice>
		</Card>
	)
}

const Card = styled.div`
		border-box: 1px solid black;
		box-shadow: 0px 8px 10px rgba(10,31,68,0.1);
		border-radius: 8px;
		width: 400px;
		height: 500px;
		margin: 50px auto 0 auto;
		display: flex;
		flex-direction: column;
		outline: #f1f1f2;
		transition: all 0.4s ease 0s;

		&:hover{
		box-shadow: 0px 8px 30px rgba(10,31,68,0.1);
		transition: all 0.4s ease 0s;
		transform: translateY(10px);
		}

		@media only screen and (max-width: 700px){
		width: 100%;
		height: 450px
		}
		`;
	
	const Image = styled.img`
		width: 100%;
		height: 300px;
		border-top-right-radius: 8px;
		border-top-left-radius: 8px;

		@media only screen and (max-width: 500px){
		height: 250px;
		}
		`;
	
	const RatingContainer = styled.div`
		margin:20px 20px;
		display: flex;
		flex-direction: row;
		height: 20px;
		align-items: center;
		`
	const PRate = styled.p`
		margin-right: 10px;
		color: #6e7679;
		font-size:16px;
		text-align: top;
		`
	const Header = styled.h1`
		font-size: 16px;
		color: #424749;
		font-weight: 700;
		margin: 6px 20px 6px 20px;
		`
	const Para = styled.p`
		font-size: 14px;
		color: #6e7679;
		font-weight: 400;
		margin: 0 20px 30px 20px;
	`
	const DivPrice = styled.div`
		display: flex;
		flex-direction: row;
		margin-right: 20px;
		align-items: center;
		justify-content: space-between;
	`
	const Button = styled.button`
		border-radius: 6px;
		text-transform: uppercase;
		box-sizing: border-box;
		padding: 10px 20px;
		outline:#f1f1f2;
		color:white;
		float: right;
		background: #f9423a;
		font-size: 16px;
		display: flex;
		flex-direction: row;
		align-items: center;
		border: none;
		transition: all 0.4s ease 0s;
		cursor: pointer;

		&:hover{
		transition: all 0.4s ease 0s;
		color: #ccc;
		-webkit-box-shadow: 0px 5px 20px -10px rgba(0,0,0,0.57);
		-moz-box-shadow: 0px 5px 20px -10px rgba(0,0,0,0.57);
		box-shadow: 5px 20px -10px rgba(0,0,0,0.57);
		background: #d12a21;
		}`
	

export default Product;