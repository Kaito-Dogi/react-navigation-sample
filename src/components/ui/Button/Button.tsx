import { FC, ReactNode } from "react";
import { Pressable } from "react-native";

import { Text } from "../Text";
import { styles } from "./Button.styles";
import { Size } from "./Button.types";

type Props = {
  text: string;
  onClick: () => void;
  size?: Size;
  icon?: ReactNode;
};

/** @package */
export const Button: FC<Props> = ({ icon, onClick, size = "m", text }) => {
  return (
    <Pressable onPress={onClick} style={styles.container}>
      {!!icon && icon}
      <Text
        text={text}
        size={size}
        color="onPrimary"
        fontWeight="bold"
        textAlign="center"
        numberOfLines={1}
      />
    </Pressable>
  );
};
