import React from 'react';
import {IconButton, PropsOf} from '@chakra-ui/react';
import {createDeleteIconStyles} from '../styles';

export type TodoDeleteButtonProps = React.FC<PropsOf<typeof IconButton>>

export const TodoDeleteButton: TodoDeleteButtonProps =
  (props) =>
    <IconButton
      {...createDeleteIconStyles()}
      {...props}
      aria-label={'Delete todo button'}
    />;
