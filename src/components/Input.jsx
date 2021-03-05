import React from 'react'
import { Input } from '@material-ui/core'
import PropTypes, { func } from 'prop-types'

function findRepeatedId(arr, value) {
	// функция проверяющая повторяющиеся элементы
	let repeatId = null
	arr.forEach((el, id) => {
		if (el.item == value) {
			repeatId = id
		}
	})
	return repeatId
}

export default function AddData({
	setLetters,
	setLettersNumbers,
	setNumbers,
	numbers,
	lettersNumbers,
	letters,
	setOpen
}) {
	const [ value, setValue ] = React.useState('')

   	function addData(value) {
		const letter = /^[а-яА-ЯёЁa-zA-Z ]+$/ //регулярка для определения букв
		const leterNumber = /^[\w\dА-я]+$/ //регулярка для определения чисел или букв
		const checkLetters = letter.test(value) //проверка на слово
		const checkNumbers = Number(value) || value === '0' //проверка на числа
		const leterNumbers = leterNumber.test(value) && !letter.test(value) && !Number(value) //проверка на числа+слово

		if (checkLetters) {
			const idRepeatElem = findRepeatedId(letters, value)
			if (idRepeatElem !== null) {
				setLetters((prev) => {
					const newItem = [ ...prev ]
					newItem[idRepeatElem].count += 1
					newItem[idRepeatElem].date = new Date().valueOf()
					return newItem
				})
			} else {
				const newItem = {
					item: value,
					date: new Date().valueOf(),
					count: 1
				}
				setLetters((prev) => [ ...prev, newItem ])
			}
		} else if (checkNumbers) {
			const idRepeatElem = findRepeatedId(numbers, value)
			if (idRepeatElem !== null) {
				setNumbers((prev) => {
					const newItem = [ ...prev ]
					newItem[idRepeatElem].count += 1
					newItem[idRepeatElem].date = new Date().valueOf()
					return newItem
				})
			} else {
				const newItem = {
					item: value,
					date: new Date().valueOf(),
					count: 1
				}
				setNumbers((prev) => [ ...prev, newItem ])
			}
		} else if (leterNumbers) {
			const idRepeatElem = findRepeatedId(lettersNumbers, value)
			if (idRepeatElem !== null) {
				setLettersNumbers((prev) => {
					const newItem = [ ...prev ]
					newItem[idRepeatElem].count += 1
					newItem[idRepeatElem].date = new Date().valueOf()
					return newItem
				})
			} else {
				const newItem = {
					item: value,
					date: new Date().valueOf(),
					count: 1
				}
				setLettersNumbers((prev) => [ ...prev, newItem ])
			}
		} else {
		   	setOpen(true)
		}
	}

	function handlerChangeInput(e) {
		const value = e.target.value.replace(/\s/g, '')
		setValue(value)
	}

	function handlerOnKeyPress(e) {
		if (e.key === 'Enter' && e.target.value !== '') {
			addData(e.target.value)
			setValue('')
		}

		if (e.key === 'Enter' && e.target.value == '') {
			setOpen(true)
		}
	}

	return (
		<div className="container__addData">
			<Input
				value={value}
				className="container__addData__input"
				placeholder="Введите слово или число"
				onChange={handlerChangeInput}
				onKeyPress={(e) => {
					handlerOnKeyPress(e)
				}}
			/>
		</div>
	)
}

AddData.propTypes = {
	setLetters: PropTypes.func,
	setLettersNumbers: PropTypes.func,
	setNumbers: PropTypes.func,
	numbers: PropTypes.array,
	lettersNumbers: PropTypes.array,
	letters: PropTypes.array,
	setOpen: func
}
