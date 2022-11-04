import {
  FormControl,
  FormErrorMessage,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type props = {
  register: UseFormRegisterReturn;
  error?: FieldError;
};
export const ABCButtons = ({ register, error }: props) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      <RadioGroup>
        <Stack spacing={3} direction="row" justifyContent="center">
          <Radio {...register} value="3">
            A
          </Radio>
          <Radio {...register} value="2">
            B
          </Radio>
          <Radio {...register} value="1">
            C
          </Radio>
        </Stack>
      </RadioGroup>
      <FormErrorMessage justifyContent="center">
        {error?.message}
      </FormErrorMessage>
    </FormControl>
  );
};
