import { Select } from "@chakra-ui/react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { useCourses } from "../../../hooks/Course";

type props = {
  register: UseFormRegisterReturn;
  error?: FieldError;
};
export const CourseInput = ({ register }: props) => {
  const { courses } = useCourses();

  if (!courses.length) {
    return <Select placeholder="選択して下さい" disabled></Select>;
  }

  return (
    <Select placeholder="選択して下さい" {...register}>
      {courses.map((course) => {
        return (
          <option key={course.id} value={course.id}>
            {course.classroom.grade}年{course.classroom.name}組「
            {course.subject.name}」
          </option>
        );
      })}
    </Select>
  );
};
