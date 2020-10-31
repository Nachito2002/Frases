import React from 'react';
import NewQuote from '../buttons/newQuote';
import ShareTwitter from '../buttons/shareTwitter';
import "../../styles/block.sass";

const Block = (props) => {
	return (
		<div className="block">
			<h1 className="quote">{ props.quote[props.index]["quote"] }</h1>
			<p className="author">- { props.quote[props.index]["author"] }</p>
			<div className="buttons">
				<ShareTwitter />
				<NewQuote />
			</div>
		</div>
	)
}

export default Block;