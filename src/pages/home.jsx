import React from 'react';
import Block from '../components/block/index';
import { connect } from 'react-redux';
import '../styles/home.sass';

const Home = (props) => {
	const color = props.color[props.colorIndex]["color"];
	return (
		<div className="page" style={{ 'backgroundColor': color }}>
			<Block />
		</div>
	)
}

const mapStateToProps = state => {
	return {
		color: state.select_color,
		colorIndex: state.select_new_indexColor
	}
}

export default connect(mapStateToProps)(Home);