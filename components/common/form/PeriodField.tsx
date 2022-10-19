import { Select, SelectProps } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";
import { periods } from "../../../types/Period";

type props = {
  register?: UseFormRegisterReturn;
} & SelectProps;
export const PeriodField = ({ register, ...props }: props) => {
  return (
    <Select placeholder="選択してください" {...(register ?? null)} {...props}>
      {periods.map((period) => (
        <option key={period} value={period}>
          {period}時間目
        </option>
      ))}
    </Select>
  );
};
