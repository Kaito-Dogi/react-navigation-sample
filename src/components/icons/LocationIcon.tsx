import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";

import { colors } from "@/src/styles/colors";

/** @package */
export const LocationIcon: FC = () => {
  return <Ionicons name="location-sharp" color={colors.disabled} size={16} />;
};
