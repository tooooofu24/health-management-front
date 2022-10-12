import { useEffect, useState } from "react";
import { Classroom } from "../types/Classroom";

export const useClassrooms = () => {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const getClassrooms = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + "/classrooms"
    );
    const json = await res.json();
    setClassrooms(json.results);
  };
  useEffect(() => {
    getClassrooms();
  }, []);
  return { classrooms, getClassrooms };
};
