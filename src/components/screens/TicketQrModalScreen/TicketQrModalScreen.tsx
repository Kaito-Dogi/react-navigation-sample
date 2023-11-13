import { FC } from "react";
import { Image, View } from "react-native";

import { Text } from "@/src/components/ui/Text";
import { Ticket } from "@/src/models/Ticket";

import { styles } from "./TicketQrModalScreen.styles";

type Props = {
  id: Ticket["event"]["id"];
};

/** @package */
export const TicketQrModalScreen: FC<Props> = ({ id }) => {
  // FIXME: 現状は使用していないが、ESLint の警告を避けるため呼び出している
  id;

  return (
    <View style={styles.container}>
      <Text text="ようこそ！" size="xl" fontWeight="bold" textAlign="center" />
      <Image
        style={styles.image}
        source={require("@/assets/react-navigation-sample-qr.png")}
      />
    </View>
  );
};
