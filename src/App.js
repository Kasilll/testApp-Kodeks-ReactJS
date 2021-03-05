import './App.scss';
import React from 'react';
import { Letters, LettersNumbers, AddData, Numbers, ToggleSwitch, AlertDialogSlide } from './components';

// FIXME: почему-то App.js а все остальные .jsx

// кажется общие состояния можно было бы вынести в контекст/редакс, но тут необязательно, но можно)
// FIXME: нет propTypes для компонентов с пропсами, а также defaultProps для значений по умолчанию
// я бы предложил заюзать CSS Modules для более явной верстки (здесь не особо важно, ибо стилей мало, но все же)

// в этом компоненте не очень понятно, как именно организована верстка элементов
// я бы это как-то чуть-чуть разделил на модалку и основной экран -> (верхняя панель + секции -> (ввод, буквы, цифры, ...))
// ну или просто чуть отделить части div`ами

function App() {
  const [letters, setLetters] = React.useState([]); // массив букв
  const [numbers, setNumbers] = React.useState([]); // массив чисел
  const [lettersNumbers, setLettersNumbers] = React.useState([]); // миссив чисел и букв
  const [checked, setChecked] = React.useState(false); // состояние переключателя
  const [open, setOpen] = React.useState(false); // модальное окно, которое откроеться в случае неправильного ввода

  return (
    <div className="container">
      <AlertDialogSlide setOpen={setOpen} open={open} />
      {/*  FIXME: сюда зачем-то передаются пропсы, которые там не нужны */}
      <ToggleSwitch
        setLetters={setLetters}
        letters={letters}
        lettersNumbers={lettersNumbers}
        setLettersNumbers={setLettersNumbers}
        numbers={numbers}
        setNumbers={setNumbers}
        // FIXME: дублирующиеся пропсы
        numbers={numbers}
        letters={letters}
        lettersNumbers={lettersNumbers}
        checked={checked}
        setChecked={setChecked}
      />
      {/* кажется этот компонент много чего меняет внутри себя,
          лучше использовать setNumbers и подобные в том же компоненте, где они созданы
      */}
      <AddData
        setLetters={setLetters}
        letters={letters}
        lettersNumbers={lettersNumbers}
        setLettersNumbers={setLettersNumbers}
        numbers={numbers}
        setNumbers={setNumbers}
        // FIXME: дублирующиеся пропсы
        numbers={numbers}
        letters={letters}
        lettersNumbers={lettersNumbers}
        checked={checked}
        setOpen={setOpen}
      />

      {/* FIXME:  в этих компонентах код повторяется почти полностью,
      кажется можно сделать один переиспользуемый компонент */}
      <Letters letters={letters} checked={checked} />
      <Numbers numbers={numbers} checked={checked} />
      <LettersNumbers lettersNumbers={lettersNumbers} checked={checked} />
    </div>
  );
}

export default App;
