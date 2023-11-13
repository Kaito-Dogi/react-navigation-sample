import { useMemo } from "react";

import { Color } from "./Color";
import { colors } from "./colors";

/** @package */
export const useColors = (color: Color): `#${string}` => {
  const colorValue = useMemo(() => {
    switch (color) {
      case "primary":
        return colors.primary;
      case "onPrimary":
        return colors.onPrimary;
      case "primaryContainer":
        return colors.primaryContainer;
      case "background":
        return colors.background;
      case "onBackground":
        return colors.onBackground;
      case "surface":
        return colors.surface;
      case "onSurface":
        return colors.onSurface;
      case "disabled":
        return colors.disabled;
    }
  }, [color]);

  return colorValue;
};
