import React, {ChangeEvent} from 'react';
import {Input} from '@chakra-ui/react';
import {useInputFocus} from 'hooks';

export interface AddTodoInputProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const AddTodoInput: React.FC<AddTodoInputProps> = (props) => {
  const {inputRef} = useInputFocus();

  return (
    <Input {...props} placeholder="Новая задача..." size="md" ref={inputRef}/>
  );
};
