import React, {useState} from 'react';
import styled from 'styled-components';
import GuitarImage from '../../assets/image/guitar.jpg';
import StarRatings from 'react-star-ratings';

function Product (props) {

	const { addPrice } = props;
	
	const [rating] = useState(4.5);
	
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
		}
		`;
	
	const Image = styled.img`
		width: 100%;
		height: 300px;
		border-top-right-radius: 8px;
		border-top-left-radius: 8px;
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
	
	return(
		<Card>
			<Image src={GuitarImage} alt="guitar"/>
			<RatingContainer>
				<PRate>{rating}</PRate>	
				<StarRatings
					  rating={rating}
					  starRatedColor="#f9423a"
					  numberOfStars={5}
					  name='rating'
					  starDimension="16px"
      				  starSpacing="4px"
					/>
			</RatingContainer>
			<Header>Black Semi Hollow Guitar</Header>
			<Para>by Kulina • Uptown Guitar</Para>
			<DivPrice>
				<Header>Rp.35.000</Header>
				<Button onClick={addPrice}>Add +</Button>
			</DivPrice>
		</Card>
	)
}

export default Product;