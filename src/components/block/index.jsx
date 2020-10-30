import React from 'react';
import Page from './page';
import { connect } from 'react-redux';

class Block extends React.Component {
	render() {
		return (
			<Page quote={ this.props.quote }/>
		)
	}
}

const mapStateToProps = state => {
	return {
		quote: state.select_quote
	}
}

export default connect(mapStateToProps)(Block);