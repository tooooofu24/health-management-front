import { useEffect, useState } from "react";
import { Subject } from "../types/Subject";
import { getBearerToken } from "../utils/auth";

export const useSubjects = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const getSubjects = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + "/subjects",
      {
        headers: {
          Authorization: "Bearer " + getBearerToken(),
        },
      }
    );
    const json = await res.json();
    setSubjects(json.results);
  };
  return { subjects, getSubjects };
};
