import { Select, SelectProps } from "@chakra-ui/react";
import { FC, Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { UseFormRegisterReturn } from "react-hook-form";
import { useClassrooms } from "../../../hooks/Classroom";
import { ErrorFallbackTile } from "../error/ErrorFallbackTile";
import { LoadingField } from "../loading/LoadingField";

type props = {
  register?: UseFormRegisterReturn;
} & SelectProps;
export const ClassroomField = ({ register, ...props }: props) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
      <Suspense fallback={<LoadingField />}>
        <Field register={register} {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};
const Field: FC<props> = ({ register, ...props }) => {
  const { classrooms } = useClassrooms();
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
