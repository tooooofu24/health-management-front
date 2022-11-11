import { Select, SelectProps } from "@chakra-ui/react";
import { useEffect } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { useClassrooms } from "../../../hooks/Classroom";

type props = {
  register?: UseFormRegisterReturn;
} & SelectProps;
export const ClassroomField = ({ register, ...props }: props) => {
  const { classrooms } = useClassrooms();
  if (!classrooms.length) {
    return <Select placeholder="読み込み中..." disabled></Select>;
  }
  return (
    <Select placeholder="選択して下さい" {...(register ?? null)} {...props}>
      {classrooms.map((classroom) => (
        <option key={classroom.id} value={classroom.id}>
          {classroom.grade}年{classroom.name}組
        </option>
      ))}
    </Select>
  );
};
