import React from 'react';
import { connect } from 'react-redux';

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
		return (
			<button>
				<a href={ this.state.url } target="_blank" onClick={ this.handleShareTweet }>Compartir/Twitter</a>
			</button>
		)
	}
}

const mapStateToProps = state => {
	return {
		quote: state.select_quote,
		index: state.select_new_index
	}
}

export default connect(mapStateToProps)(ShareTwitter);