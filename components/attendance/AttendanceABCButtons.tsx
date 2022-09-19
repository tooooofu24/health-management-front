import {
  Box,
  Button,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  useRadio,
  useRadioGroup,
  UseRadioProps,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

// 1. Create a component that consumes the `useRadio` hook
function RatioButton(
  props: UseRadioProps & {
    children: ReactNode;
    setValue: React.Dispatch<React.SetStateAction<string | number>>;
  }
) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box {...checkbox}>
        <Button
          {...checkbox}
          role="radio"
          size="sm"
          borderWidth="1px"
          color={props.isChecked ? "white" : "gray.400"}
          variant={props.isChecked ? "solid" : "outline"}
          colorScheme={props.isChecked ? "teal" : "gray"}
          disabled={props.isDisabled}
          borderColor={
            props.isInvalid
              ? "red.500"
              : props.isChecked
              ? "teal.500"
              : "current"
          }
          onClick={(e) => {
            e.preventDefault();
            props.setValue(props.value ? props.value : "");
          }}
        >
          {props.children}
        </Button>
      </Box>
    </Box>
  );
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export function AttendanceABCButtons() {
  const options = ["A", "B", "C"];

  const { getRootProps, getRadioProps, setValue } = useRadioGroup({
    name: "test",
    defaultValue: "",
    onChange: () => {},
  });

  const group = getRootProps();

  return (
    <HStack {...group} justifyContent="center">
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RatioButton key={value} setValue={setValue} {...radio}>
            {value}
          </RatioButton>
        );
      })}
    </HStack>
  );
}
