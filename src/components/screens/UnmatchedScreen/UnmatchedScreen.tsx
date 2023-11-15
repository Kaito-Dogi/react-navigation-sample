import { FC, useCallback } from "react";
import { SafeAreaView, View } from "react-native";

import { Button } from "@/src/components/ui/Button";
import { Text } from "@/src/components/ui/Text";

import { styles } from "./UnmatchedScreen.styles";

/** @package */
export const UnmatchedScreen: FC = () => {
  const onClick = useCallback(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text text="存在しない画面です ><" color="disabled" textAlign="center" />
      <View>
        <Button text="ホームに戻る" onClick={onClick} size="m" />
      </View>
    </SafeAreaView>
  );
};
