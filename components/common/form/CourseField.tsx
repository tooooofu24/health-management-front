import { Select, SelectProps } from "@chakra-ui/react";
import { useEffect } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { useCourses } from "../../../hooks/Course";

type props = {
  register?: UseFormRegisterReturn;
} & SelectProps;
export const CourseField = ({ register, ...props }: props) => {
  const { courses, getCourses, isLoading } = useCourses();
  useEffect(() => {
    getCourses();
  }, []);
  if (isLoading) {
    return <Select placeholder="読み込み中..." disabled></Select>;
  }
  return isLoading ? (
    <Select placeholder="読み込み中..." disabled></Select>
  ) : (
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
