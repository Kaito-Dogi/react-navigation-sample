import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";

import { colors } from "@/src/styles/colors";

/** @package */
export const PersonIcon: FC = () => {
  return <Ionicons name="person-sharp" color={colors.disabled} size={16} />;
};
