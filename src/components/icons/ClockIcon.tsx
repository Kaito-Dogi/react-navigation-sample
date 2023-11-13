import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";

import { colors } from "@/src/styles/colors";

/** @package */
export const ClockIcon: FC = () => {
  return <Ionicons name="time-sharp" color={colors.disabled} size={16} />;
};
