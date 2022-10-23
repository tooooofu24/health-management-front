import { useState } from "react";
import { CalculatedAttendance } from "../types/CalculatedAttendance";
import { getRequest } from "../utils/apiClient";

export const useCalculatedAttendances = () => {
  const [calculatedAttendances, setCalculatedAttendances] = useState<
    CalculatedAttendance[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const getCalculatedAttendances = async (
    classroomId: string | number,
    subjectId: string | number
  ) => {
    setIsLoading(true);
    const response = await getRequest("/attendances/calculated", {
      classroomId,
      subjectId,
    }).finally(() => {
      setIsLoading(false);
    });
    setCalculatedAttendances(response.results);
  };
  return { calculatedAttendances, getCalculatedAttendances, isLoading };
};
