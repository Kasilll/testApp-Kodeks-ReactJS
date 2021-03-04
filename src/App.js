import './App.scss';
import React from 'react';
import { Letters, LettersNumbers, AddData, Numbers, ToggleSwitch } from './components';

function App() {
	const [ letters, setLetters ] = React.useState([]); // массив букв
	const [ numbers, setNumbers ] = React.useState([]); // массив чисел
	const [ lettersNumbers, setLettersNumbers ] = React.useState([]); // миссив чисел и букв
	const [ checked, setChecked ] = React.useState(false); // состояние переключателя

	return (
		<div className="container">
			<ToggleSwitch
				setLetters={setLetters}
				letters={letters}
				lettersNumbers={lettersNumbers}
				setLettersNumbers={setLettersNumbers}
				numbers={numbers}
				setNumbers={setNumbers}
				numbers={numbers}
				letters={letters}
				lettersNumbers={lettersNumbers}
				checked={checked}
				setChecked={setChecked}
			/>
			<AddData
				setLetters={setLetters}
				letters={letters}
				lettersNumbers={lettersNumbers}
				setLettersNumbers={setLettersNumbers}
				numbers={numbers}
				setNumbers={setNumbers}
				numbers={numbers}
				letters={letters}
				lettersNumbers={lettersNumbers}
				checked={checked}
			/>
			<Letters letters={letters} checked={checked}/>
			<Numbers numbers={numbers} checked={checked} />
			<LettersNumbers lettersNumbers={lettersNumbers} checked={checked} />
		</div>
	);
}

export default App;
