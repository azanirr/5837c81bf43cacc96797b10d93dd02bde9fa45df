import * as actionTypes from '../constant/actionTypes';
import Guitar from '../../assets/image/guitar.jpg';
import Guitar2 from '../../assets/image/guitar2.jpg';

const initialState = {
    product: [{
		image: Guitar,
		rating: "4.5",
		title: "Black Semi Hollow Guitar",
		from: "by Kulina • Uptown Guitar",
		price: "5.000"
	}, {
		image: Guitar2,
		rating: "4",
		title: "Accoustic Nihon Wood Guitar",
		from: "by Kulina • Woodly Guitar",
		price: "700"
	}],
	totalPrice: 0
}

function rootReducer(state = initialState, action){
    switch (action.type) {
		case actionTypes.ADD_PRICE:
			return {
				...state,
				product: [state.product, action.payload],
				totalPrice: state.totalPrice + state.product.price
			}
			default: return state;
	}
}

export default rootReducer;