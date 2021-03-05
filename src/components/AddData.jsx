import React from 'react';
import { Input } from '@material-ui/core';

// HACK: обьявить функции тут или снаружи

export default function AddData({ setLetters, setLettersNumbers, setNumbers, numbers, lettersNumbers, letters, setOpen }) {
  const [value, setValue] = React.useState('');

  // FIXME: код, который не использует части компонента напрямую лучше вынести вовне (в shared/utils.js, например)
  // или просто объявить перед объявлением компонента, см.выше
  // FIXME: checkRepeatCount из названия говорит, что она вернет boolean
  // для текущей реализации лучше подойдет findRepeatedId
  function checkRepeatCount(arr, value) {
    // функция проверяющая повторяющиеся элементы
    // FIXME: это можно сделать в одну строку, если вместо forEach взять find
    let repeatId = null;
    arr.forEach((el, id) => {
      if (el.item == value) {
        repeatId = id;
      }
    });
    return repeatId;
  }

  // FIXME: очень большая функция - лучше разбить на несколько и вероятно тоже куда-то вынести
  function addData(value) {
    // HACK: еще можно не регуляркой, а через ASCII коды, это
    const letter = /^[а-яА-ЯёЁa-zA-Z ]+$/; //регулярка для определения букв
    // FIXME: опечатка
    const leterNumber = /^[\w\dА-я]+$/; //регулярка для определения чисел или букв

    if (letter.test(value)) {
      // кажется эту переменную можно вынести
      const idRepeatElem = checkRepeatCount(letters, value);
      if (idRepeatElem !== null) {
        // FIXME: это не setState в классах, здесь можно использовать letters без коллбеков
        setLetters(prev => {
          const newItem = [...prev];
          newItem[idRepeatElem].count += 1;
          // FIXME: data обычно значит "данные", дата - это date
          newItem[idRepeatElem].data = new Date().valueOf();
          return newItem;
        });
      } else {
        const newItem = {
          item: value,
          data: new Date().valueOf(),
          count: 1,
        };
        setLetters(prev => [...prev, newItem]);
      }
      // FIXME: лучше эту проверку поместить в переменную с очевидным названием
    } else if (leterNumber.test(value) && !letter.test(value) && !Number(value)) {
      const idRepeatElem = checkRepeatCount(lettersNumbers, value);
      if (idRepeatElem !== null) {
        setLettersNumbers(prev => {
          const newItem = [...prev];
          newItem[idRepeatElem].count += 1;
          newItem[idRepeatElem].data = new Date().valueOf();
          return newItem;
        });
      } else {
        const newItem = {
          item: value,
          data: new Date().valueOf(),
          count: 1,
        };
        setLettersNumbers(prev => [...prev, newItem]);
      }
      // FIXME: если ввести 0, то ввод попадет в раздел буквы и цифры)
    } else if (Number(value)) {
      const idRepeatElem = checkRepeatCount(numbers, value);
      if (idRepeatElem !== null) {
        setNumbers(prev => {
          const newItem = [...prev];
          newItem[idRepeatElem].count += 1;
          newItem[idRepeatElem].data = new Date().valueOf();
          return newItem;
        });
      } else {
        // FIXME: создание нового элемента повторяется, можно вынести
        const newItem = {
          item: value,
          data: new Date().valueOf(),
          count: 1,
        };
        setNumbers(prev => [...prev, newItem]);
      }
    } else {
      setOpen(true);
    }
  }
  // FIXME: лучше делать отступы между функциями
  function handlerChangeInput(e) {
    const value = e.target.value.replace(/\s/g, '');
    setValue(value);
  }
  function handlerOnKeyPress(e) {
    if (e.key === 'Enter' && e.target.value !== '') {
      addData(e.target.value);
      setValue('');
    }
    // FIXME: везде строгое равенство, а здесь нет
    if (e.key === 'Enter' && e.target.value == '') {
      setOpen(true);
    }
  }
  return (
    // FIXME: по БЭМу названия классов в кебаб-кейсе
    <div className="container__addData">
      <Input
        value={value}
        className="container__addData__input"
        placeholder="Введите слово или число"
        inputProps={{ 'aria-label': 'description' }}
        // HACK: тут можно сократить до
        // onChange={handlerChangeInput}
        onChange={e => {
          handlerChangeInput(e);
        }}
        onKeyPress={e => {
          handlerOnKeyPress(e);
        }}
      />
    </div>
  );
}
