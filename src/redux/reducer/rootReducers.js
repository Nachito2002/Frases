import { combineReducers } from 'redux';
import select_quote from './selectQuote';
import select_new_index from './selectIndex';
import select_color from './selectColor.js';
import select_new_indexColor from './selectIndexColor.js';

export const rootReducers = combineReducers({
	select_quote,
	select_new_index,
	select_color,
	select_new_indexColor
})