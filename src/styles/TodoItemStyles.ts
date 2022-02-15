import {CheckIcon, DeleteIcon} from '@chakra-ui/icons';
import React from 'react';

export const createTodoItemStyles = (completed: boolean) => ({
  px: 5,
  py: 2,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'space-between',
  background: completed ? 'green.400' : 'white',
  color: completed ? 'white' : 'black',
  border: completed ? 'transparent' : '1px',
  borderColor: 'blackAlpha.300',
});

export const createDeleteIconStyles = () => ({
  'color': 'red.400',
  'variant': 'ghost',
  'aria-label': 'Delete todo button',
  'icon': React.createElement(DeleteIcon),
  '_hover': {
    background: 'red.400',
    color: 'white',
  },
});

export const createCheckIconStyles = () => ({
  'color': 'green.400',
  'variant': 'ghost',
  'icon': React.createElement(CheckIcon),
  '_hover': {
    background: 'green.400',
    color: 'white',
  },
});
