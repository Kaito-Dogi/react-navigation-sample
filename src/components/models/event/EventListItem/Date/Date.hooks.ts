import { format } from "date-fns";
import { useMemo } from "react";

/** @package */
export const useDay = (datetime: Date): string => {
  return useMemo(() => {
    return format(datetime, "dd");
  }, [datetime]);
};

/** @package */
export const useMonthShort = (datetime: Date): string => {
  return useMemo(() => {
    return format(datetime, "MMM");
  }, [datetime]);
};
