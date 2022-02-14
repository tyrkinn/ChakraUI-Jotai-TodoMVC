import React, {FC} from 'react';
import {Container} from '@chakra-ui/react';
import {AddTodoForm} from './components/AddTodoForm';
import {Header} from './components/Header/Header';
import {TodoFilter} from './components/Filter';
import {TodoList} from './components/TodoList';
import './App.css';


export const App: FC = () => {
  return (
    <Container>
      <Header/>
      <AddTodoForm/>
      <TodoFilter />
      <TodoList/>
    </Container>
  );
};
