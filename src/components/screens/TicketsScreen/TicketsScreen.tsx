import { FC, useCallback, useState } from "react";
import { Image, SafeAreaView, View } from "react-native";

import { EventInfoBoxes } from "@/src/components/models/event/EventInfoBoxes";
import { Button } from "@/src/components/ui/Button";
import { Divider } from "@/src/components/ui/Divider";
import { Spacer } from "@/src/components/ui/Spacer";
import { Text } from "@/src/components/ui/Text";
import { mockEvents } from "@/src/mocks/events";

import { styles } from "./TicketsScreen.styles";

/** @package */
export const TicketsScreen: FC = () => {
  // TODO: 所持しているチケットを fetch する
  const event = mockEvents.find((event) => event.id === "5");

  // TODO: 表示しているチケットの id を保持
  const [ticketId] = useState(event?.id);

  const onClick = useCallback(() => {}, [ticketId]);

  if (!event) return null;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ticketContainer}>
        <View style={styles.ticket}>
          <Image source={{ uri: event.imageUrl }} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text
              text={event.name}
              size="l"
              fontWeight="bold"
              numberOfLines={2}
            />
            <Divider />
            <EventInfoBoxes
              datetime={event.datetime}
              location={event.location}
              organizer={event.organizer}
            />
            <Spacer />
            <View style={styles.circleContainer}>
              <View style={[styles.circle, styles.startCircle]} />
              <View style={[styles.circle, styles.endCircle]} />
              <Divider />
            </View>
            <Button text="QR コードを表示する" onClick={onClick} size="l" />
          </View>
        </View>
        {/**
         * TODO:
         * - チケットの枚数分表示する
         * - 表示しているチケット番目の indicator の色を primary にする
         */}
        <View style={styles.indicatorContainer}>
          <View style={[styles.indicator, styles.isShown]}></View>
          <View style={styles.indicator}></View>
          <View style={styles.indicator}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};
