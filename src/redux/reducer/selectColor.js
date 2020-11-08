import { colorList } from '../defaultStates/colorList.js';

const defaultState = colorList;

const select_color = (state = defaultState, action) => {
	switch(action.type) {
		default:
			return state
	}
}

export default select_color;