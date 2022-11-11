import { Select, SelectProps } from "@chakra-ui/react";
import { FC, Suspense, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { UseFormRegisterReturn } from "react-hook-form";
import { useSubjects } from "../../../hooks/Subject";
import { ErrorFallbackTile } from "../error/ErrorFallbackTile";
import { LoadingField } from "../loading/LoadingField";

type props = {
  register?: UseFormRegisterReturn;
} & SelectProps;
export const SubjectField = ({ register, ...props }: props) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
      <Suspense fallback={<LoadingField />}>
        <Field register={register} {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};

const Field: FC<props> = ({ register, ...props }) => {
  const { subjects } = useSubjects();
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
