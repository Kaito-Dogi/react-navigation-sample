import { NavigationContainer } from "@react-navigation/native";
import { FC } from "react";

import { RootTab } from "./RootTab";

export const AppNavigator: FC = () => {
  return (
    <NavigationContainer>
      <RootTab />
    </NavigationContainer>
  );
};
