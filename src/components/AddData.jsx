import React from 'react';
import { Input } from '@material-ui/core';

export default function AddData({ setLetters, setLettersNumbers, setNumbers, numbers, lettersNumbers, letters, setOpen }) {
	const [ value, setValue ] = React.useState('');
	function checkRepeatCount(arr, value) {
		// функция проверяющая повторяющиеся элементы
		let repeatId = null;
		arr.forEach((el, id) => {
			if (el.item == value) {
				repeatId = id;
			}
		});
		return repeatId;
	}

	function addData(value) {
		const letter = /^[а-яА-ЯёЁa-zA-Z ]+$/; //регулярка для определения букв
		const leterNumber = /^[\w\dА-я]+$/; //регулярка для определения чисел или букв

		if (letter.test(value)) {
			const idRepeatElem = checkRepeatCount(letters, value);
			if (idRepeatElem !== null) {
				setLetters((prev) => {
					const newItem = [ ...prev ];
					newItem[idRepeatElem].count += 1;
					newItem[idRepeatElem].data = new Date().valueOf();
					return newItem;
				});
			} else {
				const newItem = {
					item: value,
					data: new Date().valueOf(),
					count: 1
				};
				setLetters((prev) => [ ...prev, newItem ]);
			}
		} else if (leterNumber.test(value) && !letter.test(value) && !Number(value)) {
			const idRepeatElem = checkRepeatCount(lettersNumbers, value);
			if (idRepeatElem !== null) {
				setLettersNumbers((prev) => {
					const newItem = [ ...prev ];
					newItem[idRepeatElem].count += 1;
					newItem[idRepeatElem].data = new Date().valueOf();
					return newItem;
				});
			} else {
				const newItem = {
					item: value,
					data: new Date().valueOf(),
					count: 1
				};
				setLettersNumbers((prev) => [ ...prev, newItem ]);
			}
		} else if (Number(value)) {
			const idRepeatElem = checkRepeatCount(numbers, value);
			if (idRepeatElem !== null) {
				setNumbers((prev) => {
					const newItem = [ ...prev ];
					newItem[idRepeatElem].count += 1;
					newItem[idRepeatElem].data = new Date().valueOf();
					return newItem;
				});
			} else {
				const newItem = {
					item: value,
					data: new Date().valueOf(),
					count: 1
				};
				setNumbers((prev) => [ ...prev, newItem ]);
			}
		} else {
			setOpen(true);
		}
	}
	function handlerChangeInput(e) {
		const value = e.target.value.replace(/\s/g, '');
		setValue(value);
	}
	function handlerOnKeyPress(e) {
		if (e.key === 'Enter' && e.target.value !== '') {
			addData(e.target.value);
			setValue('');
		}
		if(e.key === 'Enter' && e.target.value == '') {
			setOpen(true);
		}
	}
	return (
		<div className="container__addData">
			<Input
				value={value}
				className="container__addData__input"
				placeholder="Введите слово или число"
				inputProps={{ 'aria-label': 'description' }}
				onChange={(e) => {
					handlerChangeInput(e);
				}}
				onKeyPress={(e) => {
					handlerOnKeyPress(e);
				}}
			/>
		</div>
	);
}
