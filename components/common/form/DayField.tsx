import { Select, SelectProps } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";
import { days } from "../../../types/Day";

type props = {
  register?: UseFormRegisterReturn;
} & SelectProps;
export const DayField = ({ register, ...props }: props) => {
  return (
    <Select placeholder="選択してください" {...(register ?? null)} {...props}>
      {days.map((day) => (
        <option key={day} value={day}>
          {day}時間目
        </option>
      ))}
    </Select>
  );
};
