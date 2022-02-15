import {useAtom} from 'jotai';
import {filterAtom} from 'store/todoList';
import {Filter} from 'types/filter';

export const useFilter = () => {
  const [filter, setFilter] = useAtom(filterAtom);

  // noinspection JSUnusedGlobalSymbols
  const buttonClick = (currentFilter: Filter) => ({
    onClick: () => setFilter(currentFilter),
    isActive: currentFilter === filter,
  });
  return {
    buttonClick,
  };
};
