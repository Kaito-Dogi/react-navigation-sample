import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FC } from "react";

type Props = {
  color: `#${string}`;
  outline?: boolean;
};

/** @package */
export const TicketIcon: FC<Props> = ({ color, outline = false }) => {
  return outline ? (
    <MaterialCommunityIcons
      name="ticket-confirmation-outline"
      color={color}
      size={24}
    />
  ) : (
    <MaterialCommunityIcons
      name="ticket-confirmation"
      color={color}
      size={24}
    />
  );
};
