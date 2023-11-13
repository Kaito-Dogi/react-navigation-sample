import { format } from "date-fns";
import { useMemo } from "react";

/** @package */
export const useDate = (datetime: Date): string => {
  return useMemo(() => {
    return format(datetime, "yyyy/MM/dd");
  }, [datetime]);
};

/** @package */
export const useTime = (datetime: Date): string => {
  return useMemo(() => {
    return format(datetime, `HH:mm`);
  }, [datetime]);
};
