import React from 'react'
import PropTypes from 'prop-types'

export default function Letters({ letters, checked }) {
	console.log(letters)
	const renderLetters = [ ...letters ]
	if (checked) {
		renderLetters.sort((a, b) => (a.item.toLowerCase() > b.item.toLowerCase() ? 1 : -1))
	} else {
		renderLetters.sort((a, b) => (a.date < b.date ? 1 : -1))
	}
	return (
		<div className="container__letters">
			<h3 className="tittle">Буквы</h3>
			<div className="container-items">
				{renderLetters.map((letter) => (
					<div className="item" key={letter.date}>
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
	)
}

Letters.propTypes = {
	letters: PropTypes.array,
	checked: PropTypes.bool
}
