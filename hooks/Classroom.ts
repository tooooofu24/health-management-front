import { useEffect, useState } from "react";
import { Classroom } from "../types/Classroom";
import { getBearerToken } from "../utils/auth";

export const useClassrooms = () => {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const getClassrooms = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + "/classrooms",
      {
        headers: {
          Authorization: "Bearer " + getBearerToken(),
        },
      }
    );
    const json = await res.json();
    setClassrooms(json.results);
  };
  return { classrooms, getClassrooms };
};

export const useClassroom = () => {
  const [classroom, setClassroom] = useState<Classroom | null>(null);
  const getClassroom = async (id: number | string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/classrooms/${id}`,
      {
        headers: {
          Authorization: "Bearer " + getBearerToken(),
        },
      }
    );
    const json = await res.json();
    setClassroom(json.result);
  };
  return { classroom, getClassroom };
};
