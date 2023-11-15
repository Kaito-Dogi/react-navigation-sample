import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FC, useCallback } from "react";
import { FlatList, SafeAreaView } from "react-native";

import { EventListItem } from "@/src/components/models/event/EventListItem";
import { Spacer } from "@/src/components/ui/Spacer";
import { Text } from "@/src/components/ui/Text";
import { mockEvents } from "@/src/mocks/events";
import { Event } from "@/src/models/Event";
import { EventStackParamList } from "@/src/navigation";
import { dimens } from "@/src/styles/dimens";

import { styles } from "./EventListScreen.styles";

type Props = {
  navigation: StackNavigationProp<EventStackParamList, "EventList">;
  route: RouteProp<EventStackParamList, "EventList">;
};

/** @package */
export const EventListScreen: FC<Props> = ({ navigation, route }) => {
  // 使用していないが呼び出しておく
  route;

  const onEventClick = useCallback(
    (event: Event) => {
      navigation.navigate("EventDetail", { id: event.id });
    },
    [navigation]
  );

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};
