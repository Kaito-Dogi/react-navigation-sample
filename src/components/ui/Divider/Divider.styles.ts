import { StyleSheet } from "react-native";

import { colors } from "@/src/styles/colors";

/** @package */
export const styles = StyleSheet.create({
  divider: {
    alignSelf: "stretch",
    height: 0,
    borderWidth: 0.5,
    borderColor: colors.disabled,
    borderStyle: "dashed",
  },
});
