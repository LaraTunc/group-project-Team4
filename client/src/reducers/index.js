import { combineReducers } from 'redux';
import itemDetailsReducer from './itemDetails-reducer';
import itemGridReducer from './itemGrid-reducer';
import myCartReducer from './myCart-reducer';

export default combineReducers({
    itemDetailsReducer,
    itemGridReducer,
    myCartReducer
});