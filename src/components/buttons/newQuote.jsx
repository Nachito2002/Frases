import React from 'react';
import { connect } from 'react-redux';
import { select_new_index } from '../../redux/actions/selectNewIndex';

class NewQuote extends React.Component {
	constructor(props) {
		super(props);

		this.handleChangeIndex = this.handleChangeIndex.bind(this);
	}

	handleChangeIndex = () => {
		this.props.select_new_index();
	}

	render() {
		return(
			<button onClick={ this.handleChangeIndex }>
				newQuote
			</button>
		)
	}
}

const mapDispatchToProps = {
	select_new_index
}

export default connect(null, mapDispatchToProps)(NewQuote);