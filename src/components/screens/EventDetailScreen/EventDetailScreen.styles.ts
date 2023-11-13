import { StyleSheet } from "react-native";

import { colors } from "@/src/styles/colors";
import { dimens } from "@/src/styles/dimens";

/** @package */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    backgroundColor: colors.background,
  },
  contentContainer: {
    gap: dimens.l,
    backgroundColor: colors.background,
    padding: dimens.l,
  },
  image: {
    width: "100%",
    aspectRatio: 1.618,
    borderRadius: dimens.m,
  },
  priceAndButtonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: dimens.m,
    backgroundColor: colors.surface,
    padding: dimens.s,
    shadowColor: colors.onBackground,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  priceContainer: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  emptyView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
});
