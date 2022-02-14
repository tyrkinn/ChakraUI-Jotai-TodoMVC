import React, {ChangeEvent, useState} from 'react';
import {useAtom} from 'jotai';
import {todosAtom} from '../store/shared';
import {lastIdAtom, showFormErrorsAtom} from '../store/addTodoForm';

export const useAddTodoForm = () => {
  const [showErrors, setShowErrors] = useAtom(showFormErrorsAtom);
  const [todoInput, setTodoInput] = useState('');
  const [, setTodos] = useAtom(todosAtom);
  const [lastId] = useAtom(lastIdAtom);

  const isInputValid = todoInput.trim() !== '';

  const clearInput = () => setTodoInput('');

  const addTodo = (todoTitle: string) => {
    setTodos(
        (p) => [...p, {title: todoTitle, completed: false, id: lastId + 1}],
    );
    clearInput();
    setShowErrors(false);
  };

  const onAddTodoClick = () => {
    isInputValid ? addTodo(todoInput) : setShowErrors(true);
  };

  const isFormValid = isInputValid || !showErrors;

  const onInputChanged =
      (e: ChangeEvent<HTMLInputElement>) => setTodoInput(e.target.value);

  const onEnterPress: React.KeyboardEventHandler = ({key}) => {
    if (key === 'Enter') {
      onAddTodoClick();
    }
  };

  const inputProps = {
    value: todoInput,
    onChange: onInputChanged,
    onKeyDown: onEnterPress,
  };

  return {
    onAddTodoClick,
    onInputChanged,
    isFormValid,
    inputProps,
  };
};
