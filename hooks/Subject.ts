import { useEffect, useState } from "react";
import { Subject } from "../types/Subject";

export const useSubjects = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const getSubjects = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/subjects");
    const json = await res.json();
    setSubjects(json.results);
  };
  return { subjects, getSubjects };
};
