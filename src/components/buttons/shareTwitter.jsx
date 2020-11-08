import React from 'react';
import { connect } from 'react-redux';
import Twitter from '../../images/twitterSvg.js';

class ShareTwitter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			url: "https://www.twitter.com/compose/tweet"
		}

		this.handleShareTweet = this.handleShareTweet.bind(this);
	}

	handleShareTweet = () => {
		// this.props.quote[this.props.index]["quote"]
		let link = "";

		this.props.quote[this.props.index]["quote"].split(" ").forEach(element => {
			link = link + element + "%20";
		});

		link = link + "-%20"

		this.props.quote[this.props.index]["author"].split(" ").forEach(element => {
			link = link + element + "%20";
		});

		this.setState({
			url: "https://www.twitter.com/compose/tweet?text=" + link
		})
	};

	render() {
		const color = this.props.color[this.props.colorIndex]["color"];
		return (
			<a href={ this.state.url } target="_blank" onClick={ this.handleShareTweet } className="btn btn-lg btn-white" style={{ backgroundColor: color, color: 'white' }}>
				Tweet
			</a>
		)
	}
}

const mapStateToProps = state => {
	return {
		quote: state.select_quote,
		index: state.select_new_index,
		color: state.select_color,
		colorIndex: state.select_new_indexColor
	}
}

export default connect(mapStateToProps)(ShareTwitter);