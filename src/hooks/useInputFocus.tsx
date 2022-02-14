import {useEffect, useRef} from 'react';
import {showFormErrorsAtom} from '../store/addTodoForm';
import {useAtom} from 'jotai';

export const useInputFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [, setShowErrors] = useAtom(showFormErrorsAtom);


  useEffect(
      () => {
        inputRef?.current?.
            addEventListener('focusin', () => setShowErrors(true));

        inputRef?.current?.
            addEventListener('focusout', () => setShowErrors(false));
      }, [setShowErrors]);


  return {inputRef};
};
