import React from 'react';
import {ButtonGroup, Flex} from '@chakra-ui/react';
import {useTodoItem} from '../../hooks';
import {createTodoItemStyles} from '../styles';
import {Todo} from '../../types/todo';
import {TodoDeleteButton} from './TodoDeleteButton';
import {TodoCheckButton} from './TodoCheckButton';


export const TodoItem: React.FC<{ todo: Todo }> =
    ({todo: {id, title, completed}}) => {
      const {deleteTodo, completeTodo} = useTodoItem(id);

      return (
        <Flex {...createTodoItemStyles(completed)}>
          {title}
          <ButtonGroup>
            <TodoDeleteButton onClick={deleteTodo}/>
            <TodoCheckButton onClick={completeTodo} completed={completed}/>
          </ButtonGroup>
        </Flex>
      );
    };
