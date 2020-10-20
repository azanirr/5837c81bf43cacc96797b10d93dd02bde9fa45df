import React from 'react';
import Product from '../components/product/Product';
import Navbar from '../components/navbar/Navbar';

function Home () {

	return(
		<div>
			<Navbar />
			<Product />
			<Product />
			<Product />
		</div>
	)
}

export default Home;