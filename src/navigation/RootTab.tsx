import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC } from "react";

import { PeopleIcon, TicketIcon } from "../components/icons";
import { TicketsScreen } from "../components/screens/TicketsScreen";
import { colors } from "../styles/colors";
import { EventStack } from ".";

type RootTabParamList = {
  Event: undefined;
  Ticket: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

/** @package */
export const RootTab: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        name="Event"
        component={EventStack}
        options={{
          title: "イベント",
          tabBarIcon: ({ color, focused }) => (
            <PeopleIcon color={color as `#${string}`} outline={!focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketsScreen}
        options={{
          title: "チケット",
          tabBarIcon: ({ color, focused }) => (
            <TicketIcon color={color as `#${string}`} outline={!focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
