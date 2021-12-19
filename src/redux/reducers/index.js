import categoriesReducer from './categories';
import productsReducer from './products';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer
})

export default allReducers;