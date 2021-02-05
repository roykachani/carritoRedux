import { ADD_TO_CARRY, DELETE_ITEM } from './../action/carry';
import { products } from './../../products.json';

export const inicialState = {
  products,
  carry: [],
};

export default function carryReducer(state = inicialState, action) {
  switch (action.type) {
    case ADD_TO_CARRY:
      return {
        ...state,
        carry: [...state.carry, action.payload],
      };

    case DELETE_ITEM:
      return {
        ...state,
        carry: state.carry.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
}
