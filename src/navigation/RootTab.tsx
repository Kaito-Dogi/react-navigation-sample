import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { setBackgroundColorAsync } from "expo-navigation-bar";
import { FC, useEffect } from "react";
import { Platform } from "react-native";

import { PeopleIcon, TicketIcon } from "@/src/components/icons";
import { colors } from "@/src/styles/colors";

import { EventStack, TicketStack } from ".";

type RootTabParamList = {
  Event: undefined;
  Ticket: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

/** @package */
export const RootTab: FC = () => {
  useEffect(() => {
    /**
     * Expo で Android の Native Navigation Bar を透過させることはできないので、
     * Bottom Tabs と同じ色に設定している
     * - https://github.com/expo/expo/issues/16036
     * - https://docs.expo.dev/versions/latest/sdk/navigation-bar/#navigationbarsetbackgroundcolorasynccolor
     */
    Platform.OS === "android" && setBackgroundColorAsync(colors.surface);
  }, [colors.surface]);

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
        component={TicketStack}
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
