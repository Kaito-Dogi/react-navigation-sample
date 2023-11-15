import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";

type Props = {
  color: string;
  outline?: boolean;
};

/** @package */
export const PeopleIcon: FC<Props> = ({ color, outline = false }) => {
  return outline ? (
    <Ionicons name="people-outline" color={color} size={24} />
  ) : (
    <Ionicons name="people-sharp" color={color} size={24} />
  );
};
