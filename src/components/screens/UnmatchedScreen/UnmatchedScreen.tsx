import { FC, useCallback } from "react";
import { View } from "react-native";

import { Text } from "@/src/components/ui/Text";

import { Button } from "../../ui/Button";
import { styles } from "./UnmatchedScreen.styles";

/** @package */
export const UnmatchedScreen: FC = () => {
  const onClick = useCallback(() => {}, []);

  return (
    <View style={styles.container}>
      <Text text="存在しない画面です ><" color="disabled" textAlign="center" />
      <View>
        <Button text="ホームに戻る" onClick={onClick} size="m" />
      </View>
    </View>
  );
};
