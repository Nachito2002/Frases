import React from 'react';
import NewQuote from '../buttons/newQuote';
import ShareTwitter from '../buttons/shareTwitter';
import { connect } from 'react-redux';

const Block = (props) => {
	const color = props.colors[props.color_index]["color"];
	return (
		<div className="container bg-white p-5 d-flex flex-column">
			<h1 style={{ color: color }}>{ props.quote[props.index]["quote"] }</h1>
			<h2 style={{ color: color }} className="align-self-end">- { props.quote[props.index]["author"] }</h2>
			<div className="d-flex flex-row justify-content-between mt-5">
				<ShareTwitter/>
				<NewQuote />
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		quote: state.select_quote,
		index: state.select_new_index,
		colors: state.select_color,
		color_index: state.select_new_indexColor
	}
}

export default connect(mapStateToProps)(Block);