import {ResponsiveValue} from '@chakra-ui/react';
import {Property} from 'csstype';

export const createTodoListStyles = () => ({
  spacing: 2,
  maxH: 500,
  overflowY: 'scroll' as ResponsiveValue<Property.OverflowY>,
  mt: 5,
});
