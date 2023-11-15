import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { TicketQrModalScreen } from "@/src/components/screens/TicketQrModalScreen";
import { TicketsScreen } from "@/src/components/screens/TicketsScreen";
import { colors } from "@/src/styles/colors";

/** @package */
export type TicketStackParamList = {
  Tickets: undefined;
  TicketQrModal: { id: string };
};

const JsStack = createStackNavigator<TicketStackParamList>();

/** @package */
export const TicketStack: React.FC = () => {
  return (
    <JsStack.Navigator
      initialRouteName={"Tickets"}
      screenOptions={{ headerTintColor: colors.primary }}
    >
      <JsStack.Screen
        name={"Tickets"}
        component={TicketsScreen}
        options={{ headerShown: false, title: "チケット" }}
      />
      {/**
       * モーダルは Android で動作しないため JS Stack Navigator で独自に実装する必要がある
       * - https://reactnavigation.org/docs/stack-navigator
       */}
      <JsStack.Screen
        name={"TicketQrModal"}
        component={TicketQrModalScreen}
        options={{
          ...TransitionPresets.ModalPresentationIOS,
          title: "QR コード",
          headerBackTitle: "チケット",
          presentation: "modal",
        }}
      />
    </JsStack.Navigator>
  );
};
