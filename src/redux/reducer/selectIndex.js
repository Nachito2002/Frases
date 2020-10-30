import { quoteList } from '../defaultStates/quoteList';
import { INDEX } from '../actions/selectNewIndex';

const defaultState = quoteList.length;

const select_new_index = (state = defaultState - 1, action) => {
	switch(action.type) {
		case INDEX:
			return Math.round(Math.random() * state);
		default:
			return state;
	}
}

export default select_new_index;