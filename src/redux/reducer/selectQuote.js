import { quoteList } from '../defaultStates/quoteList';

const defaultState = quoteList;

const select_quote = (state = defaultState, action) => {
	switch(action.type) {
		default:
			return state
	}
}

export default select_quote;