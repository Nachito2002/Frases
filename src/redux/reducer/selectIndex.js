import { num } from '../defaultStates/quoteList';
import { INDEX } from '../actions/selectNewIndex';

const select_new_index = (state = 0, action) => {
	switch(action.type) {
		case INDEX:
			if (state !== num - 1) {
				return state + 1;
			} else {
				return 0
			}
		default:
			return state;
	}
}

export default select_new_index;