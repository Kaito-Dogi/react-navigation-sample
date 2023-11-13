import { FC, useCallback } from "react";
import { FlatList, View } from "react-native";

import { EventListItem } from "@/src/components/models/event/EventListItem";
import { Spacer } from "@/src/components/ui/Spacer";
import { Text } from "@/src/components/ui/Text";
import { mockEvents } from "@/src/mocks/events";
import { Event } from "@/src/models/Event";
import { dimens } from "@/src/styles/dimens";

import { styles } from "./EventListScreen.styles";

/** @package */
export const EventListScreen: FC = () => {
  const onEventClick = useCallback((event: Event) => {
    event;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList<Event>
        data={mockEvents}
        renderItem={({ item }) => (
          <EventListItem event={item} onEventClick={onEventClick} />
        )}
        keyExtractor={(item) => `${item.id}`}
        ListHeaderComponent={
          <>
            <Text
              text="おすすめのイベント"
              size="xl"
              fontWeight="bold"
              numberOfLines={1}
            />
            <Spacer height="m" />
          </>
        }
        ItemSeparatorComponent={() => <Spacer height="m" />}
        contentContainerStyle={{
          padding: dimens.m,
        }}
      />
    </View>
  );
};
