import React, {useState, useEffect} from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Navbar () {
	
	const [day, setDay] = useState([]);
	
	useEffect(() => {
		const days = []
		const dateStart = moment();
		const dateEnd = moment().add(30, "days");
	  	while (dateEnd.diff(dateStart, "days") >= 0) {
			days.push(dateStart.format("ddd D"));
			dateStart.add(1, "days");
		}
		setDay(days);
		console.log(days);
	}, [])
	
	let settings = {
		dots: false,
		infinite: true,
		autoplay: false,
		fade: false,
		speed: 500,
		slidesToShow: 15,
		slidesToScroll: 15,
		arrows: true,
		responsive: [
		  {
			breakpoint: 1200,
			settings: {
			  arrows: true,
			  slidesToShow: 12,
			  slidesToScroll: 12,
			},
		  },
		  {
			breakpoint: 1000,
			settings: {
			  arrows: true,
			  slidesToShow: 10,
			  slidesToScroll: 10,
			},
		  },
		  {
			breakpoint: 760,
			settings: {
			  arrows: true,
			  slidesToShow: 7,
			  slidesToScroll: 7,
			},
		  },
		  {
			breakpoint: 580,
			settings: {
			  arrows: true,
			  slidesToShow: 5,
			  slidesToScroll: 5,
			},
		  },
		],
	  };
	
	const DivRow = styled.div`
		width: 100%;
		height: 75px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		transition: all 0.4s ease 0s;
		color: #424749;

		&:hover{
		transition: all 0.4s ease 0s;
		border: none;
		border-radius: 75%;
		background: #424749;
		color: white;
		}
		
	`
	
	const Date = styled.h1`
		text-align: center;
		width: 30px;
		font-size: 16px;
		font-weight: 700;
		margin: 12.5px auto;
	}
	`
	const DivFixed = styled.div`
		position: fixed;
		top:0;
		left: 0;
		right: 0;
		z-index: 2;
		background: #fff;
	`
	
	const Div = styled.div`
		display:flex;
		flex-direction: row;
	`
	const Arrow = styled.h1`
		margin-left: 45px;
		color: #424749;
		font-size: 24px;
		`
	const DivCol = styled.div`
		margin: 15px 0 0 20px;
		display:flex;
		flex-direction: column;
		justify-content: flex-start;
		`
	const P1 = styled.p`
		font-size: 12px;
		margin: 0;
		color: #6e7679;
		`
	const H1 = styled.h1`
		font-size: 16px;
		color: #424749;
		margin: 0;
		`
	const DivSlide = styled.div`
		border-bottom: 1px solid #f1f1f2;
		`
	
	return(
		<DivFixed>
			<Div>
				<Arrow>A</Arrow>
				<DivCol>
					<P1>ALAMAT PENGANTARAN</P1>
					<H1>Tokopedia Tower</H1>
				</DivCol>
			</Div>
			<DivSlide>
				<Slider {...settings}>
						{day.map(day => {
							return(		
								<DivRow>
									<Date>{day}</Date>
								</DivRow>
							)
						})}
				</Slider>
			</DivSlide>
			</DivFixed>
	)
}

export default Navbar;