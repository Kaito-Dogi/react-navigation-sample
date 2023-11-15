import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TicketQrModalScreen } from "../components/screens/TicketQrModalScreen";
import { TicketsScreen } from "../components/screens/TicketsScreen";
import { colors } from "../styles/colors";

/** @package */
export type TicketStackParamList = {
  Tickets: undefined;
  TicketQrModal: { id: string };
};

const Stack = createNativeStackNavigator<TicketStackParamList>();

/** @package */
export const TicketStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Tickets"}
      screenOptions={{ headerTintColor: colors.primary }}
    >
      <Stack.Screen
        name={"Tickets"}
        component={TicketsScreen}
        options={{ headerShown: false, title: "チケット" }}
      />
      <Stack.Screen
        name={"TicketQrModal"}
        component={TicketQrModalScreen}
        options={{
          title: "QR コード",
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};
