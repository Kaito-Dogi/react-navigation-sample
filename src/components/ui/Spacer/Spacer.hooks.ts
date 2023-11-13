import { useMemo } from "react";
import { ViewStyle } from "react-native";

import { dimens } from "@/src/styles/dimens";

import { Size } from "./Spacer.types";

const useSizeStyle = (size: Size): number | "auto" => {
  const style = useMemo(() => {
    switch (size) {
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
      case "auto":
        return "auto";
    }
  }, [size]);
  return style;
};

/** @package */
export const useStyle = (width: Size, height: Size): ViewStyle => {
  const widthValue = useSizeStyle(width);
  const heightValue = useSizeStyle(height);

  const style: ViewStyle = useMemo(() => {
    return {
      flex: widthValue === "auto" && heightValue === "auto" ? 1 : 0,
      alignSelf:
        widthValue === "auto" && heightValue === "auto" ? "stretch" : "auto",
      width: widthValue,
      height: heightValue,
    };
  }, [widthValue, heightValue]);
  return style;
};
