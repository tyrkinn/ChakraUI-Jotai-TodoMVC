import React from 'react';
import {screen, render, fireEvent} from '@testing-library/react';
import {FilterButton} from './FilterButton';
import {useFilter} from '../../../hooks';
import {Filter} from '../../../types/filter';
import {useAtom} from 'jotai';
import {filterAtom} from '../../../store/todoList';


const MockFilterButton: React.FC<{filter?: Filter; text?: string}> =
    ({filter=Filter.ALL, text='All'}) => {
      const {buttonClick} = useFilter();
      return (
        <FilterButton text={text} {...buttonClick(filter)}/>
      );
    };

const FilterDisplay: React.FC =
    () => {
      const [filter] = useAtom(filterAtom);
      return (
        <h1>{filter}</h1>
      );
    };

test('Filter button should render',
    () => {
      render(<MockFilterButton />);
      expect(screen.getByText('All')).toBeInTheDocument();
    });

test('Filter button with ALL filter should be active by default',
    () => {
      render(<MockFilterButton />);
      expect(screen.getByText('All')).toHaveAttribute('data-active');
    });

test('Filter button should become active when clicked on it',
    () => {
      render(<MockFilterButton filter={Filter.ACTIVE} text={'Active'} />);
      const filterButton = screen.getByText('Active');
      fireEvent.click(filterButton);
      expect(filterButton).toHaveAttribute('data-active');
    });

test('Filter atom value should be changed after clicking on FilterButton',
    () => {
      const FILTER_ACTIVE_VALUE = Filter.ACTIVE;
      render(<FilterDisplay />);
      render(<MockFilterButton filter={Filter.ACTIVE} text={'Active'}/>);
      const filterButton = screen.getByText('Active');
      const filterValue = screen.getByRole('heading');
      fireEvent.click(filterButton);
      expect(filterValue).toHaveTextContent(FILTER_ACTIVE_VALUE.toString());
    });
