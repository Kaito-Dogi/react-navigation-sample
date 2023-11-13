import { FC, ReactNode } from "react";
import { View } from "react-native";

import { Text } from "@/src/components/ui/Text";

import { styles } from "./IconText.styles";

type Props = {
  text: string;
  icon: ReactNode;
};

/** @package */
export const IconText: FC<Props> = ({ icon, text }) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text text={text} color="disabled" fontWeight="bold" numberOfLines={1} />
    </View>
  );
};
