import { StyleSheet } from "react-native";

import { colors } from "@/src/styles/colors";
import { dimens } from "@/src/styles/dimens";

/** @package */
export const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: dimens.s,
    paddingVertical: dimens.s,
    paddingHorizontal: dimens.l,
    borderRadius: dimens.s,
    backgroundColor: colors.primary,
  },
});
