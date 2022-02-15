import React from 'react';
import {List, ListItem} from '@chakra-ui/react';
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
      {todosView.map(
          (t) =>
            <ListItem key={t.id}><TodoItem todo={t} /></ListItem>,
      )}
    </List>
  );
};
