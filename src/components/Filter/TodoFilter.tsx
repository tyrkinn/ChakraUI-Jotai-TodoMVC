import React from 'react';
import {useFilter} from 'hooks';
import {SimpleGrid} from '@chakra-ui/react';
import {FilterButton} from 'components/Filter/FilterButton/FilterButton';
import {Filter} from 'types/filter';

export const TodoFilter: React.FC = () => {
  const {buttonClick} = useFilter();
  return (
    <SimpleGrid mt={5} columns={3} w={'100%'}>
      <FilterButton {...buttonClick(Filter.ALL)} text={'Все'}/>
      <FilterButton {...buttonClick(Filter.COMPLETED)} text={'Завершенные'}/>
      <FilterButton {...buttonClick(Filter.ACTIVE)} text={'Активные'}/>
    </SimpleGrid>
  );
};
