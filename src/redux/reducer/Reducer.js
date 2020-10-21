import * as actionTypes from '../constant/actionTypes';
import Food from '../../assets/image/Food.jpg';
import Food2 from '../../assets/image/Food2.jpg';
import Food3 from '../../assets/image/Food3.jpg';

const initialState = {
    product: [{
		id: 1,
		image: Food,
		rating: "4.5",
		title: "Healthy Vegetable Salads",
		from: "by Kulina • Uptown Lunch",
		price: 25000
	}, {
		id: 2,
		image: Food2,
		rating: "4",
		title: "Burger Patty With Mayonnaise",
		from: "by Kulina • Uptown Lunch",
		price: 40000
	},
		{
		id: 3,
		image: Food3,
		rating: "5",
		title: "Pancake With Chocolate Syrup",
		from: "by Kulina • Uptown Desert",
		price: 27000
		}],
	totalPrice: 0
}

function rootReducer(state = initialState, action){
    switch (action.type) {
		case actionTypes.ADD_PRICE:
			return {
				...state,
				product: [state.product, action.payload]
			}
		case actionTypes.CALCULATE_PRICE:
			return{
				...state,
				totalPrice: state.product.reduce()
			}
			default: return state;
	}
}

export default rootReducer;