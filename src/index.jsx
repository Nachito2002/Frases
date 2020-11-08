import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<Provider store={ store }>
			<Home />
		</Provider>
	)
}

ReactDOM.render(<App />, document.getElementById("root"));