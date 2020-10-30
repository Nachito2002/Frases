import React from 'react';
import { connect } from 'react-redux';
import { select_new_index } from '../../redux/actions/selectNewIndex';

class NewQuote extends React.Component {

	render() {
		return(
			<button>
				newQuote
			</button>
		)
	}
}

const mapDispatchToProps = {
	select_new_index
}

export default connect(null, mapDispatchToProps)(NewQuote);