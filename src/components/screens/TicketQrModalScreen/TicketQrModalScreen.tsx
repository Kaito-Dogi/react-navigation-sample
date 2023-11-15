import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FC } from "react";
import { Image, SafeAreaView } from "react-native";

import { Text } from "@/src/components/ui/Text";
import { TicketStackParamList } from "@/src/navigation";

import { styles } from "./TicketQrModalScreen.styles";

type Props = {
  navigation: StackNavigationProp<TicketStackParamList, "TicketQrModal">;
  route: RouteProp<TicketStackParamList, "TicketQrModal">;
};

/** @package */
export const TicketQrModalScreen: FC<Props> = ({ navigation, route }) => {
  // FIXME: 現状は使用していないが、ESLint の警告を避けるため呼び出している
  navigation;
  route;

  return (
    <SafeAreaView style={styles.container}>
      <Text text="ようこそ！" size="xl" fontWeight="bold" textAlign="center" />
      <Image
        style={styles.image}
        source={require("@/assets/react-navigation-sample-qr.png")}
      />
    </SafeAreaView>
  );
};
