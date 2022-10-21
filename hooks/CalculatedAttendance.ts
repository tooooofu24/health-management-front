import { useState } from "react";
import { CalculatedAttendance } from "../types/CalculatedAttendance";
import { getRequest } from "../utils/apiClient";

export const useCalculatedAttendances = () => {
  const [calculatedAttendances, setCalculatedAttendances] = useState<
    CalculatedAttendance[]
  >([]);
  const getCalculatedAttendances = async (
    classroomId: string | number,
    subjectId: string | number
  ) => {
    const response = await getRequest("/attendances/calculated", {
      classroomId,
      subjectId,
    });
    setCalculatedAttendances(response.results);
  };
  return { calculatedAttendances, getCalculatedAttendances };
};
