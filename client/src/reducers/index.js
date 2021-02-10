import { combineReducers } from 'redux';
import itemDetailsReducer from './itemDetails-reducer';
import itemGridReducer from './itemGrid-reducer';

export default combineReducers({
    itemDetailsReducer,
    itemGridReducer
});