import { useEffect, useState } from "react";
import { Subject } from "../types/Subject";
import { getRequest } from "../utils/apiClient";
import { getBearerToken } from "../utils/bearer";

export const useSubjects = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const getSubjects = async () => {
    const response = await getRequest("/subjects");
    setSubjects(response.results);
  };
  return { subjects, getSubjects };
};
