import { FC, useCallback } from "react";
import { Pressable, View } from "react-native";

import { LocationIcon } from "@/src/components/icons";
import { IconText } from "@/src/components/ui/IconText";
import { Spacer } from "@/src/components/ui/Spacer";
import { Text } from "@/src/components/ui/Text";
import { Event } from "@/src/models/Event";

import { styles } from "./EventListItem.styles";
import { PriceText } from "./PriceText";
import { SquareImage } from "./SquareImage";

type Props = {
  event: Event;
  onEventClick: (event: Event) => void;
};

/** @package */
export const EventListItem: FC<Props> = ({ event, onEventClick }) => {
  const onPress = useCallback(() => {
    onEventClick(event);
  }, [event, onEventClick]);

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <SquareImage imageUrl={event.imageUrl} datetime={event.datetime} />
      <View style={styles.infoContainer}>
        <Text
          text={event.name}
          size="m"
          color="onSurface"
          fontWeight="bold"
          numberOfLines={2}
        />
        <Spacer />
        <View style={styles.locationAndPriceContainer}>
          <IconText text={event.location} icon={<LocationIcon />} />
          <Spacer />
          <PriceText price={event.price} />
        </View>
      </View>
    </Pressable>
  );
};
