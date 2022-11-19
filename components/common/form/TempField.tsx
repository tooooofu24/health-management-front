import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputFieldProps,
  NumberInputStepper,
} from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

type props = {
  register?: UseFormRegisterReturn;
} & NumberInputFieldProps;
export const TempField = ({ register, ...props }: props) => {
  return (
    <NumberInput step={0.1} min={34} max={42}>
      <NumberInputField placeholder="36.5" {...props} {...(register ?? null)} />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};
