import React from 'react'
import PropTypes from 'prop-types'

export default function LettersNumbers({ lettersNumbers, checked }) {
	const renderNumbers = [ ...lettersNumbers ]
	if (!checked) {
		renderNumbers.sort((a, b) => (a.data < b.data ? 1 : -1))
	}
	return (
		<div className="container__booksNumbers">
			<h3 className="tittle">Числа и буквы</h3>
			<div className="container-items">
				{renderNumbers.map((letterNumber) => (
					<div className="item" key={letterNumber.date}>
						{letterNumber.item}
						{letterNumber.count > 1 ? (
							<span>
								<span style={{ color: 'red' }}> x </span> {letterNumber.count}
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

LettersNumbers.propTypes = {
	lettersNumbers: PropTypes.array,
	checked: PropTypes.bool
}
