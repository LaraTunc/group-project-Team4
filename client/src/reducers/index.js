import { combineReducers } from 'redux';
import itemDetailsReducer from './itemDetails-reducer';
import itemGridReducer from './itemGrid-reducer';
import companiesReducer from './companies-reducer';

export default combineReducers({
    itemDetailsReducer,
    itemGridReducer,
    companiesReducer,
});