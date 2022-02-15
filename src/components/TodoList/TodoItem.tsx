import React from 'react';
import {ButtonGroup, Flex, IconButton, PropsOf} from '@chakra-ui/react';
import {useTodoItem} from '../../hooks';
import {
  createCheckIconStyles,
  createDeleteIconStyles,
  createTodoItemStyles,
} from '../styles';
import {Todo} from '../../types/todo';

interface TodoItemCheckIconProps
  extends Omit<React.ComponentProps<typeof IconButton>, 'aria-label'> {
  completed: boolean
}

const TodoItemCheckIcon: React.FC<TodoItemCheckIconProps> =
    ({completed, ...rest}) => {
      return !completed ?
          <IconButton
            {...rest}
            aria-label={'Complete todo button'}
            {...createCheckIconStyles()}
          /> :
          null;
    };

type TodoItemDeleteIconComponent = React.FC<PropsOf<typeof IconButton>>

const TodoItemDeleteIcon: TodoItemDeleteIconComponent =
    (props) =>
      <IconButton
        {...createDeleteIconStyles()}
        {...props}
        aria-label={'Delete todo button'}
      />;


export const TodoItem: React.FC<{ todo: Todo }> =
    ({todo: {id, title, completed}}) => {
      const {deleteTodo, completeTodo} = useTodoItem(id);

      return (
        <Flex {...createTodoItemStyles(completed)}>
          {title}
          <ButtonGroup>
            <TodoItemDeleteIcon onClick={deleteTodo}/>
            <TodoItemCheckIcon onClick={completeTodo} completed={completed}/>
          </ButtonGroup>
        </Flex>
      );
    };
