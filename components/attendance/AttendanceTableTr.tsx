import {
  border,
  Checkbox,
  Input,
  TableRowProps,
  Text,
  Tr,
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
} from "../../hooks/form/AttendanceFormHook";
import { InputField } from "../common/form/InputField";
import { AttendanceABCButtons } from "./AttendanceABCButtons";
import { AttendanceTableTd } from "./AttendanceTableTd";

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
      <AttendanceTableTd borderColor={borderColor}>1</AttendanceTableTd>
      <AttendanceTableTd borderColor={borderColor}>石田京楓</AttendanceTableTd>
      <AttendanceTableTd borderColor={borderColor}>
        <Checkbox size="lg" {...register(`rows.${index}.attend`)}></Checkbox>
      </AttendanceTableTd>
      <AttendanceTableTd borderColor={borderColor}>
        <AttendanceABCButtons
          register={register(`rows.${index}.knowledge`, {
            required: "必須項目です！",
          })}
          error={error?.knowledge}
        />
      </AttendanceTableTd>
      <AttendanceTableTd borderColor={borderColor}>
        <AttendanceABCButtons
          register={register(`rows.${index}.expression`, {
            required: "必須項目です！",
          })}
          error={error?.expression}
        />
      </AttendanceTableTd>
      <AttendanceTableTd borderColor={borderColor}>
        <AttendanceABCButtons
          register={register(`rows.${index}.attitude`, {
            required: "必須項目です！",
          })}
          error={error?.attitude}
        />
      </AttendanceTableTd>
      <AttendanceTableTd borderColor={borderColor}>
        <InputField
          register={register(`rows.${index}.comment`)}
          width="300px"
        />
      </AttendanceTableTd>
    </Tr>
  );
};
