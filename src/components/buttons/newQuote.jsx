import React from 'react';
import { connect } from 'react-redux';
import { select_new_index } from '../../redux/actions/selectNewIndex';
import { select_new_index_color } from '../../redux/actions/selectNewIndexColor';

class NewQuote extends React.Component {
	constructor(props) {
		super(props);

		this.handleChangeIndex = this.handleChangeIndex.bind(this);
	}

	handleChangeIndex () {
		this.props.select_new_index();
		this.props.select_new_index_color();
	}

	render() {
		const color = this.props.color[this.props.colorIndex]["color"];
		return(
			<button onClick={ this.handleChangeIndex } className="btn btn-lg btn-white" style={{ backgroundColor: color, color: 'white' }}>
				Nueva Cita
			</button>
		)
	}
}

const mapStateToProps = state => {
	return {
		color: state.select_color,
		colorIndex: state.select_new_indexColor
	}
}

const mapDispatchToProps = {
	select_new_index,
	select_new_index_color
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuote);
