import { FC } from "react";
import { Image, ScrollView, View } from "react-native";

import { EventInfoBoxes } from "@/src/components/models/event/EventInfoBoxes";
import { Button } from "@/src/components/ui/Button";
import { Divider } from "@/src/components/ui/Divider";
import { Text } from "@/src/components/ui/Text";
import { mockEvents } from "@/src/mocks/events";
import { Event } from "@/src/models/Event";

import { styles } from "./EventDetailScreen.styles";

type Props = {
  id: Event["id"];
};

/** @package */
export const EventDetailScreen: FC<Props> = ({ id }) => {
  const event = mockEvents.find((event) => event.id === id);

  if (!event) {
    console.log(id);
    return (
      <View style={styles.emptyView}>
        <Text
          text="イベントが存在しません"
          color="disabled"
          textAlign="center"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <Image source={{ uri: event.imageUrl }} style={styles.image} />
        <Text text={event.name} size="l" fontWeight="bold" numberOfLines={2} />
        <Divider />
        <EventInfoBoxes
          datetime={event.datetime}
          location={event.location}
          organizer={event.organizer}
        />
        <Divider />
        <Text text={event.description} />
      </ScrollView>
      <View style={styles.priceAndButtonRow}>
        <View style={styles.priceContainer}>
          <Text
            text={event.price === 0 ? "FREE" : `¥${event.price}`}
            size="l"
            fontWeight="bold"
            textAlign="center"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text="参加する"
            onClick={() => {
              console.log("参加する");
            }}
            size="l"
          />
        </View>
      </View>
    </View>
  );
};
