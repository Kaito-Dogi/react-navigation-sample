import { Platform, StatusBar, StyleSheet } from "react-native";

import { colors } from "@/src/styles/colors";

/**
 * @package
 */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
