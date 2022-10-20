import { useState } from "react";
import { CalculatedAttendance } from "../types/CalculatedAttendance";
import { getBearerToken } from "../utils/auth";

export const useCalculatedAttendances = () => {
  const [calculatedAttendances, setCalculatedAttendances] = useState<
    CalculatedAttendance[]
  >([]);
  const getCalculatedAttendances = async (
    classroomId: string | number,
    subjectId: string | number
  ) => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL +
        "/attendances/calculated?classroom=" +
        classroomId +
        "&subject=" +
        subjectId,
      {
        headers: {
          Authorization: "Bearer " + getBearerToken(),
        },
      }
    );
    const json = await res.json();
    setCalculatedAttendances(json.results);
  };
  return { calculatedAttendances, getCalculatedAttendances };
};
