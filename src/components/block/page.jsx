import React from 'react';
import NewQuote from '../buttons/newQuote';

import "../../styles/block.sass";

const Block = (props) => {
	return (
		<div className="block">
			<h1 className="quote">{ props.quote.quote }</h1>
			<p className="author">Autor</p>
			<div className="buttons">
				<NewQuote />
				<NewQuote />
			</div>
		</div>
	)
}

export default Block;