import { Select, SelectProps } from "@chakra-ui/react";
import { FC, Suspense } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { LoadingField } from "../loading/LoadingField";

type props = {
  register?: UseFormRegisterReturn;
} & SelectProps;
export const ClassroomField = ({ register, ...props }: props) => {
  return (
    <Suspense fallback={<LoadingField />}>
      <Field register={register} {...props} />
    </Suspense>
  );
};
const Field: FC<props> = ({ register, ...props }) => {
  return <></>;
  // const { classrooms } = useClassrooms();
  // return (
  //   <Select placeholder="選択して下さい" {...(register ?? null)} {...props}>
  //     {classrooms.map((classroom) => (
  //       <option key={classroom.id} value={classroom.id}>
  //         {classroom.grade}年{classroom.name}組
  //       </option>
  //     ))}
  //   </Select>
  // );
};
