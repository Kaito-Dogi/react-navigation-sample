import { useMemo } from "react";
import { TextStyle } from "react-native";

import { useColors } from "@/src/styles/colors";
import { Type, useTypes } from "@/src/styles/types";

import { FontWeight, TextAlign, TextColor } from "./Text.types";

/** @package */
export const useStyle = (
  color: TextColor,
  fontWeight: FontWeight,
  size: Type,
  textAlign: TextAlign,
): TextStyle => {
  const textColor = useColors(color);
  const fontSize = useTypes(size);

  const style = useMemo(() => {
    return {
      color: textColor,
      fontWeight,
      fontSize,
      textAlign,
    };
  }, [color, fontWeight, size, textAlign]);
  return style;
};
