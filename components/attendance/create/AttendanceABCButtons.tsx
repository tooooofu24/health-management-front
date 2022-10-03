import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  HStack,
  useRadioGroup,
} from "@chakra-ui/react";
import { WarningCircle } from "phosphor-react";
import React, { ReactNode } from "react";
import {
  FieldError,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import { RatioButton } from "../../common/form/RadioButton";

type props = {
  register: UseFormRegisterReturn;
  error?: FieldError;
};
export const AttendanceABCButtons = ({ register, error }: props) => {
  const options = ["A", "B", "C"];

  const { getRootProps, getRadioProps, setValue } = useRadioGroup();

  const group = getRootProps();

  return (
    <FormControl isInvalid={Boolean(error)}>
      <HStack {...group} justifyContent="center">
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RatioButton
              key={value}
              setValue={setValue}
              register={register}
              error={error}
              {...radio}
            >
              {value}
            </RatioButton>
          );
        })}
      </HStack>
      <Flex w="full" justifyContent="center">
        <FormErrorMessage>
          <Flex alignItems="center" gap="5px">
            <WarningCircle />
            {error?.message}
          </Flex>
        </FormErrorMessage>
      </Flex>
    </FormControl>
  );
};
