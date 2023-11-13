import { useMemo } from "react";

import { Dimen } from "./Dimen";
import { dimens } from "./dimens";

/** @package */
export const useDimens = (dimen: Dimen): number => {
  const dimenValue = useMemo(() => {
    switch (dimen) {
      case "xxs":
        return dimens.xxs;
      case "xs":
        return dimens.xs;
      case "s":
        return dimens.s;
      case "m":
        return dimens.m;
      case "l":
        return dimens.l;
      case "xl":
        return dimens.xl;
    }
  }, [dimen]);

  return dimenValue;
};
