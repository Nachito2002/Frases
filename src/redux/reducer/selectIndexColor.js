import { colorListLength } from '../defaultStates/colorList.js';
import { INDEX } from '../actions/selectNewIndexColor.js';

const select_new_index_color = (state = 0, action) => {
	switch(action.type) {
		case INDEX:
			if (state !== colorListLength - 1) {
				return state + 1;
			} else {
				return 0
			};
		default:
			return state;
	}
}

export default select_new_index_color;