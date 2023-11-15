import { StyleSheet } from "react-native";

import { colors } from "@/src/styles/colors";

/** @package */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
});
