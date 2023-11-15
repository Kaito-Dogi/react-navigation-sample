import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { EventDetailScreen } from "../components/screens/EventDetailScreen";
import { EventListScreen } from "../components/screens/EventListScreen";

/** @package */
export type EventStackParamList = {
  EventList: undefined;
  EventDetail: { id: string };
};

const Stack = createNativeStackNavigator<EventStackParamList>();

/** @package */
export const EventStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={"EventList"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={"EventList"} component={EventListScreen} />
      <Stack.Screen name={"EventDetail"} component={EventDetailScreen} />
    </Stack.Navigator>
  );
};
