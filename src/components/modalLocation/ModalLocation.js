import React from 'react';
import { Modal } from "@material-ui/core";
import styled from 'styled-components';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CloseIcon from '@material-ui/icons/Close';

function ModalLocation (props) {
	
	const { open, onClose } = props;
	
	const DivModal = styled.div`
		width: 40%;
		height: 700px;
		position: fixed;
		bottom: 0;
		left: 30%;
		right: 30%;
		margin: 100px auto 0 auto;
		background: white;
		border-radius: 8px;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		
		@media only screen and (max-width: 700px){
		width: 100%;
		left: 0;
		right: 0;
		}
	`
	const H1 = styled.h1`
		font-size: 20px;
		font-weight: 500;
		margin: 0px auto;
		padding-top: 100px;
		color: #424749;
		width: 85%;
	`
	const Input = styled.input`
		width:85%;
		box-sizing: border-box;
		border-radius: 4px;
		padding: 15px 15px 15px 50px;
		border: 1px solid #f1f1f2;
		outline: #f1f1f2;
		margin: 20px 7.5% 30px 7.5%;
		`
	
	const DivLoc = styled.div`
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 20px 50px 0px 50px;
	`
	
	const H1loc = styled.h1`
		font-weight: 500;
		color: #424749;
		margin: 0 30px 0 0;
		font-size: 18px;
		`
	const DivDetail = styled.div`
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid #f1f1f2;
		justify-content: center;
		width: 400px;
		`
	const Ploc = styled.p`
		font-weight: 400;
		margin: 5px 0;
		color: #6e7679;
		font-size: 14px;
		`
	const DivInput = styled.div`
		position: relative;
		display: flex;
		flex-direction: row;
	`
	
	return(
		<div>
			<Modal open={open} onClose={onClose}>
				<DivModal>
					<CloseIcon style={{position: "absolute", top: "10px", right: "10px", cursor: "pointer"}} onClick={onClose}/>
					<H1>Cek makanan yang tersedia di lokasi kamu!</H1>
					<DivInput>
						<LocationOnIcon style={{position: "absolute", left: "10%", top: "30%", fill: "#f9423a"}} />
						<Input></Input>
					</DivInput>
					<DivLoc>
						<div>
							<LocationOnIcon  style={{background: "#e2e4e4", borderRadius: "75%", marginRight: "30px", fill: "#6e7679"}}></LocationOnIcon>
						</div>
						<DivDetail>
							<H1loc>Kulina</H1loc>
							<Ploc>Jalan Tulodong Atas 28, Senayan, Kebayoran Baru</Ploc>
						</DivDetail>
					</DivLoc>
					<DivLoc>
						<div>
							<LocationOnIcon  style={{background: "#e2e4e4", borderRadius: "75%", marginRight: "30px", fill: "#6e7679"}}></LocationOnIcon>
						</div>
						<DivDetail>
							<H1loc>Pancora Riverside Appartment</H1loc>
							<Ploc>RT.6/RW.12, Pengadean, Pancoran, South Jakarta</Ploc>
						</DivDetail>
					</DivLoc>
					<DivLoc>
						<div>
							<LocationOnIcon  style={{background: "#e2e4e4", borderRadius: "75%", marginRight: "30px", fill: "#6e7679"}}></LocationOnIcon>
						</div>
						<DivDetail>
							<H1loc>Jalan Tulodong Atas 28</H1loc>
							<Ploc>Jalan Tulodong Atas 28, Senayan, Kebayoran Baru</Ploc>
						</DivDetail>
					</DivLoc>
					<DivLoc>
						<div>
							<LocationOnIcon  style={{background: "#e2e4e4", borderRadius: "75%", marginRight: "30px", fill: "#6e7679"}}></LocationOnIcon>
						</div>
						<DivDetail>
							<H1loc>Block71 Jakarta</H1loc>
							<Ploc>Ariobimo Sentral, South Jakarta, RT.9/RW.4, Jakarta</Ploc>
						</DivDetail>
					</DivLoc>
				</DivModal>
			</Modal>
		</div>
	)
}

export default ModalLocation;