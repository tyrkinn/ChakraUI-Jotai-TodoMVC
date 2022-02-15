import React, {FC} from 'react';
import {Container, List, ListItem} from '@chakra-ui/react';
import {AddTodoForm} from './components/AddTodoForm';
import {Header} from './components/Header/Header';
import {TodoFilter} from './components/Filter';
import './App.css';
import {useAtom} from 'jotai';
import {filteredTodosAtom} from './store/todoList';
import {TodoItem} from './components/TodoItem';


export const App: FC = () => {
  const [filteredTodos] = useAtom(filteredTodosAtom);
  return (
    <Container>
      <Header/>
      <AddTodoForm/>
      <TodoFilter />
      <List spacing={1} mt={5}>
        {
          filteredTodos.map((todo) =>
            <ListItem key={todo.id}><TodoItem todo={todo} /></ListItem>,
          )
        }
      </List>
    </Container>
  );
};
