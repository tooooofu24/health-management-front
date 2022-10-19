import { Select, SelectProps } from "@chakra-ui/react";
import { useEffect } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { useSubjects } from "../../../hooks/Subject";

type props = {
  register?: UseFormRegisterReturn;
} & SelectProps;
export const SubjectField = ({ register, ...props }: props) => {
  const { subjects, getSubjects } = useSubjects();
  useEffect(() => {
    getSubjects();
  }, []);
  if (!subjects.length) {
    return <Select placeholder="読み込み中..." disabled></Select>;
  }
  return (
    <Select placeholder="選択して下さい" {...(register ?? null)} {...props}>
      {subjects.map((subject) => (
        <option key={subject.id} value={subject.id}>
          {subject.name}
        </option>
      ))}
    </Select>
  );
};
