import React from 'react';

export default function Letters({ letters, checked }) {
	const renderLetters = [ ...letters ];
	if (checked) {
		renderLetters.sort((a, b) => (a.item.toLowerCase() > b.item.toLowerCase() ? 1 : -1));
	} else {
		renderLetters.sort((a, b) => (a.data < b.data ? 1 : -1));
	}

	return (
		<div className="container__letters">
			<h3 className="tittle">Буквы</h3>
			<div className="container-items">
				{renderLetters.map((letter) => (
					<div className="item" key={letter.data}>
						{letter.item}
						{letter.count > 1 ? (
							<span>
								<span style={{ color: 'red' }}> x </span> {letter.count}
							</span>
						) : (
							''
						)}
					</div>
				))}
			</div>
		</div>
	);
}
