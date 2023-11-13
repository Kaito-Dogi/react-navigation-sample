import { StyleSheet } from "react-native";

import { colors } from "@/src/styles/colors";

/** @package */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
});
