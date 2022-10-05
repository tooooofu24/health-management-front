import {
  Box,
  Button,
  FormErrorMessage,
  useRadio,
  UseRadioProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export const RadioButton = (
  props: UseRadioProps & {
    children: ReactNode;
    setValue: React.Dispatch<React.SetStateAction<string | number>>;
    register: UseFormRegisterReturn;
    error?: FieldError;
  }
) => {
  const { children, setValue, register, error } = props;
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} {...register} />
      <Box {...checkbox}>
        <Button
          {...checkbox}
          role="radio"
          size="sm"
          borderWidth="1px"
          color={props.isChecked ? "white" : "gray.400"}
          variant={props.isChecked ? "solid" : "outline"}
          disabled={props.isDisabled}
          borderColor={error ? "red.500" : "current"}
          onClick={(e) => {
            e.preventDefault();
            setValue(props.value ? props.value : "");
          }}
        >
          {children}
        </Button>
      </Box>
    </Box>
  );
};
