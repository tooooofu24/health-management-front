import { format, intervalToDuration, formatDistance } from "date-fns";
import ja from "date-fns/locale/ja";

export const formatDate = (date: string | null): string => {
  if (!date) {
    return "";
  }
  const now = new Date();
  const time = new Date(date);
  const duration = intervalToDuration({ start: time, end: now });
  if (duration.weeks) {
    return format(time, "yyyy年M月d日", { locale: ja });
  }
  const distance = formatDistance(now, time, { locale: ja });
  return distance + "前";
};
