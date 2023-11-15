import { Platform, StatusBar, StyleSheet } from "react-native";

import { colors } from "@/src/styles/colors";
import { dimens } from "@/src/styles/dimens";

const circleRadius = 16;
const indicatorRadius = 3;

/** @package */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: dimens.m,
    backgroundColor: colors.background,
    padding: dimens.l,
    paddingBottom: dimens.m,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  ticket: {
    flex: 1,
    gap: dimens.l,
    padding: dimens.l,
    backgroundColor: colors.primary,
    borderRadius: dimens.l,
  },
  image: {
    aspectRatio: 1.618,
    width: "100%",
    borderRadius: dimens.m,
    borderWidth: 3,
    borderColor: colors.onPrimary,
  },
  infoContainer: {
    alignSelf: "stretch",
    flex: 1,
    gap: dimens.m,
    marginHorizontal: dimens.xxs,
    padding: dimens.m,
    borderRadius: dimens.m,
    backgroundColor: colors.surface,
  },
  circleContainer: {
    position: "relative",
    paddingVertical: circleRadius,
  },
  circle: {
    position: "absolute",
    top: 0,
    width: circleRadius * 2,
    height: circleRadius * 2,
    zIndex: 2,
    backgroundColor: colors.primary,
    borderRadius: dimens.xl,
  },
  startCircle: {
    start: -circleRadius * 2,
  },
  endCircle: {
    end: -circleRadius * 2,
  },
  indicatorContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: dimens.s,
  },
  indicator: {
    width: indicatorRadius * 2,
    height: indicatorRadius * 2,
    borderRadius: indicatorRadius * 2,
    backgroundColor: colors.disabled,
  },
  isShown: {
    backgroundColor: colors.primary,
  },
});
