import { Select, SelectProps } from "@chakra-ui/react";
import { FC, Suspense } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { useCourses } from "../../../hooks/Course";
import { LoadingField } from "../loading/LoadingField";

type props = {
  register?: UseFormRegisterReturn;
} & SelectProps;
export const CourseField = ({ register, ...props }: props) => {
  return (
    <Suspense fallback={<LoadingField />}>
      <Field register={register} {...props} />
    </Suspense>
  );
};

const Field: FC<props> = ({ register, ...props }) => {
  const { courses } = useCourses();
  return (
    <Select placeholder="選択して下さい" {...(register ?? null)} {...props}>
      {courses.map((course) => (
        <option key={course.id} value={course.id}>
          {course.classroom.grade}年{course.classroom.name}組「
          {course.subject.name}」
        </option>
      ))}
    </Select>
  );
};
