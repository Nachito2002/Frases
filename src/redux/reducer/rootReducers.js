import { combineReducers } from 'redux';
import select_quote from './selectQuote';
import select_new_index from './selectIndex';

export const rootReducers = combineReducers({
	select_quote,
	select_new_index
})