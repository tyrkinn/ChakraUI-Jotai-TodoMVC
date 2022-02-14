import React from 'react';
import {List} from '@chakra-ui/react';
import {TodoItem} from './TodoItem';
import {useAtom} from 'jotai';
import {todoView} from '../../store/todoList';
import {createTodoListStyles} from './styles';

export const TodoList: React.FC = () => {
  const [todosView] = useAtom(todoView);
  return (
    <List
      {...createTodoListStyles()}
    >
      {todosView.map((t) => <TodoItem todo={t} key={t.id}/>)}
    </List>
  );
};
