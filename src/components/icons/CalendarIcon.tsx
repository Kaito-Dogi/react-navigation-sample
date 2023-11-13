import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FC } from "react";

import { colors } from "@/src/styles/colors";

/** @package */
export const CalendarIcon: FC = () => {
  return (
    <MaterialCommunityIcons name="calendar" color={colors.disabled} size={16} />
  );
};
