import { StyleSheet } from "react-native";

import { dimens } from "@/src/styles/dimens";

/** @package */
export const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    height: 96,
    aspectRatio: 1,
    borderRadius: dimens.s,
  },
  date: {
    position: "absolute",
    top: dimens.xs,
    left: dimens.xs,
  },
});
