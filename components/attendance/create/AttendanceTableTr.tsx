import {
  border,
  Checkbox,
  Input,
  TableRowProps,
  Text,
  Tr,
  Td,
} from "@chakra-ui/react";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import {
  AttendanceForm,
  AttendanceRow,
} from "../../../hooks/form/AttendanceFormHook";
import { InputField } from "../../common/form/InputField";
import { AttendanceABCButtons } from "./AttendanceABCButtons";

type AttendanceTableTrProps = {
  register: UseFormRegister<AttendanceForm>;
  index: number;
  error?: FieldErrorsImpl<AttendanceRow>;
};
export const AttendanceTableTr = ({
  register,
  index,
  error,
}: AttendanceTableTrProps & TableRowProps) => {
  const borderColor = error ? "red.500" : "gray.100";
  return (
    <Tr>
      <Td borderColor={borderColor} textAlign="center">
        1
      </Td>
      <Td borderColor={borderColor} textAlign="center">
        石田京楓
      </Td>
      <Td borderColor={borderColor} textAlign="center">
        <Checkbox size="lg" {...register(`rows.${index}.attend`)}></Checkbox>
      </Td>
      <Td borderColor={borderColor} textAlign="center">
        <AttendanceABCButtons
          register={register(`rows.${index}.knowledge`, {
            required: "必須項目です！",
          })}
          error={error?.knowledge}
        />
      </Td>
      <Td borderColor={borderColor} textAlign="center">
        <AttendanceABCButtons
          register={register(`rows.${index}.expression`, {
            required: "必須項目です！",
          })}
          error={error?.expression}
        />
      </Td>
      <Td borderColor={borderColor} textAlign="center">
        <AttendanceABCButtons
          register={register(`rows.${index}.attitude`, {
            required: "必須項目です！",
          })}
          error={error?.attitude}
        />
      </Td>
      <Td borderColor={borderColor} textAlign="center">
        <InputField
          register={register(`rows.${index}.comment`)}
          width="300px"
        />
      </Td>
    </Tr>
  );
};
