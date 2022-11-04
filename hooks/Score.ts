import { useState } from "react";
import { Course } from "../types/Course";
import { Score } from "../types/Score";
import { getRequest } from "../utils/apiClient";

export const useScores = () => {
  const [scores, setSccores] = useState<Score[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const getScores = async (courseId: string | number) => {
    setIsLoading(true);
    const response = await getRequest(`/courses/${courseId}/scores`).finally(
      () => {
        setIsLoading(false);
      }
    );
    setSccores(response.results);
  };
  return { scores, getScores, isLoading };
};
