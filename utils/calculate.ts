import { Score } from "../types/Score";

export const calculateAttendanceRate = (rate: number): string => {
  rate *= 100;
  return rate.toFixed(0) + "%";
};

export const calculateValue = (value: number): string => {
  if (!value) {
    return "なし";
  }
  // 評価のリスト
  const evals = ["C-", "C", "C+", "B-", "B", "B+", "A-", "A", "A+"];
  const max = 3;
  const min = 1;
  // 幅（最大-最小）/ 階数（C- ~ A+）
  const step = (max - min) / evals.length;
  for (let i = 0; i < evals.length; i++) {
    if (value <= min + step * (i + 1)) {
      return evals[i];
    }
  }
  return "エラー";
};

export const calculateEvaluation = (score: Score) => {
  const { attitudeAverage, knowledgeAverage, expressionAverage } = score;
  const total = attitudeAverage + knowledgeAverage + expressionAverage;
  // 評価のリスト
  const evals = [1, 2, 3, 4, 5];
  const max = 9;
  const min = 3;
  // 幅（最大-最小）/ 階数（1~5）
  const step = (max - min) / evals.length;
  for (let i = 0; i < evals.length; i++) {
    if (total <= min + step * (i + 1)) {
      return evals[i];
    }
  }
  return "エラー";
};
