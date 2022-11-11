import { useEffect, useState } from "react";
import useSWR from "swr";
import { Subject } from "../types/Subject";
import { getRequest } from "../utils/apiClient";
import { fetcher } from "../utils/fetcher";

export const useSubjects = () => {
  const { data, mutate: refetch } = useSWR(["/subjects"], fetcher, {
    suspense: true,
  });
  const subjects: Subject[] = data?.results;
  return { subjects, refetch };
};
