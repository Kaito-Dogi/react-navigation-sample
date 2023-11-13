import { useMemo } from "react";

import { Type } from "./Type";
import { types } from "./types";

/** @package */
export const useTypes = (type: Type): number => {
  const typeValue = useMemo(() => {
    switch (type) {
      case "xs":
        return types.xs;
      case "s":
        return types.s;
      case "m":
        return types.m;
      case "l":
        return types.l;
      case "xl":
        return types.xl;
    }
  }, [type]);

  return typeValue;
};
