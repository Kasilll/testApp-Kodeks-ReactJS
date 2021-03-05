import './App.scss'
import React from 'react'
import { Letters, LettersNumbers, Input, Numbers, ToggleSwitch, AlertDialogSlide } from './components'

function App() {
	const [ letters, setLetters ] = React.useState([]) // массив букв
	const [ numbers, setNumbers ] = React.useState([]) // массив чисел
	const [ lettersNumbers, setLettersNumbers ] = React.useState([]) // миссив чисел и букв
	const [ checked, setChecked ] = React.useState(false) // состояние переключателя
	const [ open, setOpen ] = React.useState(false) // модальное окно, которое откроеться в случае неправильного ввода

	return (
		<div className="container">
			<AlertDialogSlide setOpen={setOpen} open={open} />
			<ToggleSwitch
				setLetters={setLetters}
				letters={letters}
				lettersNumbers={lettersNumbers}
				setLettersNumbers={setLettersNumbers}
				numbers={numbers}
				setNumbers={setNumbers}
				letters={letters}
				lettersNumbers={lettersNumbers}
				checked={checked}
				setChecked={setChecked}
			/>
			<Input
				setLetters={setLetters}
				letters={letters}
				lettersNumbers={lettersNumbers}
				setLettersNumbers={setLettersNumbers}
				numbers={numbers}
				setNumbers={setNumbers}
				letters={letters}
				lettersNumbers={lettersNumbers}
				checked={checked}
				setOpen={setOpen}
			/>
			<Letters letters={letters} checked={checked} />
			<Numbers numbers={numbers} checked={checked} />
			<LettersNumbers lettersNumbers={lettersNumbers} checked={checked} />
		</div>
	)
}

export default App
