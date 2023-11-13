import { FC } from "react";
import { View } from "react-native";

import { Text } from "@/src/components/ui/Text";
import { Event } from "@/src/models/Event";

import { useDay, useMonthShort } from "./Date.hooks";
import { styles } from "./Date.styles";

type Props = {
  datetime: Event["datetime"];
};

/** @package */
export const Date: FC<Props> = ({ datetime }) => {
  const day = useDay(datetime);
  const monthShort = useMonthShort(datetime);

  return (
    <View style={styles.container}>
      <Text
        text={day}
        size="s"
        fontWeight="bold"
        textAlign="center"
        numberOfLines={1}
      />
      <Text
        text={monthShort}
        size="xs"
        color="disabled"
        textAlign="center"
        numberOfLines={1}
      />
    </View>
  );
};
