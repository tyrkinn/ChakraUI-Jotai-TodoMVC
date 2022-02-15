import React from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import {AddTodoInput} from 'components/AddTodoForm/AddTodoInput';
import {useAddTodoForm} from 'hooks';

const FormHelper: React.FC<{ isFormValid: boolean }> = ({isFormValid}) => {
  return isFormValid ?
    <FormHelperText>Введите понятное вам название задачи</FormHelperText> :
    <FormErrorMessage>Поле обязательно</FormErrorMessage>;
};

export const AddTodoForm: React.FC = () => {
  const {isFormValid, inputProps, onAddTodoClick} = useAddTodoForm();

  return (
    <FormControl isInvalid={!isFormValid} mt={10}>
      <Flex>
        <AddTodoInput {...inputProps} />
        <Button
          type="submit"
          colorScheme={'facebook'}
          variant={'ghost'}
          onClick={onAddTodoClick}
        >
          Add todo
        </Button>
      </Flex>
      <FormHelper isFormValid={isFormValid}/>
    </FormControl>
  );
};
