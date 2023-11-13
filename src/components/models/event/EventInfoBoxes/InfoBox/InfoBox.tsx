import { FC } from "react";
import { View } from "react-native";

import { IconText } from "@/src/components/ui/IconText";
import { Text } from "@/src/components/ui/Text";

import { EventInfo } from "../EventInfo";
import { styles } from "./InfoBox.styles";

type Props = {
  info: EventInfo;
};

/** @package */
export const InfoBox: FC<Props> = ({ info }) => {
  const { icon, label, text } = info;

  return (
    <View style={styles.container}>
      <IconText text={label} icon={icon} />
      <Text text={text} fontWeight="bold" numberOfLines={1} />
    </View>
  );
};
