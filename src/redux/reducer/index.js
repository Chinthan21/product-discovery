// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  product: productReducer
});

export default rootReducer;