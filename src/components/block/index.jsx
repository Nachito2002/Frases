import React from 'react';
import Page from './page';
import { connect } from 'react-redux';

class Block extends React.Component {
	render() {
		return (
			<Page
				quote={ this.props.quote }
				index={ this.props.index }
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		quote: state.select_quote,
		index: state.select_new_index
	}
}

export default connect(mapStateToProps)(Block);