import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";

type Props = {
  color: string;
  outline?: boolean;
};

/** @package */
export const HomeIcon: FC<Props> = ({ color, outline = false }) => {
  return outline ? (
    <Ionicons name="home-outline" color={color} size={24} />
  ) : (
    <Ionicons name="home-sharp" color={color} size={24} />
  );
};
