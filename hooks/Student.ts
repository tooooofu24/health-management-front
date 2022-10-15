import { useEffect, useState } from "react";
import { Student } from "../types/Student";

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const getStudents = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/students");
    const json = await res.json();
    setStudents(json.result);
  };
  useEffect(() => {
    getStudents();
  }, []);
  return { students, setStudents };
};
