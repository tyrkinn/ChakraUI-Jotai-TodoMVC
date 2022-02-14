import React from 'react';
import {Button} from '@chakra-ui/react';

export interface FilterButtonProps {
  onClick: () => void;
  isActive: boolean;
  text: string;
}

export const FilterButton: React.FC<FilterButtonProps> =
    ({text, ...buttonProps}) => {
      return (
        <Button p={2} variant={'ghost'} {...buttonProps}>
          {text}
        </Button>
      );
    };
