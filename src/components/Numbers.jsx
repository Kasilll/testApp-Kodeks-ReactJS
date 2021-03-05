import React from 'react'
import PropTypes from 'prop-types'

export default function Numbers({ numbers, checked }) {
	const renderNumbers = [ ...numbers ]
	if (checked) {
		renderNumbers.sort((a, b) => (Number(a.item) > Number(b.item) ? 1 : -1))
	} else {
		renderNumbers.sort((a, b) => (a.date < b.date ? 1 : -1))
	}
	return (
		<div className="container__numbers">
			<h3 className="tittle">Числа</h3>
			<div className="container-items">
				{renderNumbers.map((number) => (
					<div className="item" key={number.date}>
						{number.item}
						{number.count > 1 ? (
							<span>
								<span style={{ color: 'red' }}> x </span> {number.count}
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

Numbers.propTypes = {
	numbers: PropTypes.array,
	checked: PropTypes.bool
}
