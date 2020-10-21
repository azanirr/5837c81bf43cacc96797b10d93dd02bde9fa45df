import * as actionTypes from '../constants/action-types';

export const addPrice = (data) => {
    return {
        type: actionTypes.ADD_PRICE,
        payload: data
    };
};