import React from 'react';
import {IconButton} from '@chakra-ui/react';
import {createCheckIconStyles} from '../styles';

export interface TodoCheckButtonProps
  extends Omit<React.ComponentProps<typeof IconButton>, 'aria-label'> {
  completed: boolean
}

export const TodoCheckButton: React.FC<TodoCheckButtonProps> =
  ({completed, ...rest}) => {
    return !completed ?
      <IconButton
        {...rest}
        aria-label={'Complete todo button'}
        {...createCheckIconStyles()}
      /> :
      null;
  };
