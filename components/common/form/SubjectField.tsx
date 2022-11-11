import { Select, SelectProps } from "@chakra-ui/react";
import { FC, Suspense } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { useSubjects } from "../../../hooks/Subject";
import { LoadingField } from "../loading/LoadingField";

type props = {
  register?: UseFormRegisterReturn;
} & SelectProps;
export const SubjectField = ({ register, ...props }: props) => {
  return (
    <Suspense fallback={<LoadingField />}>
      <Field register={register} {...props} />
    </Suspense>
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
