import { FC } from "react";
import { View } from "react-native";

import { useStyle } from "./Spacer.hooks";
import { Size } from "./Spacer.types";

type Props = {
  width?: Size;
  height?: Size;
};

/** @package */
export const Spacer: FC<Props> = ({ height = "auto", width = "auto" }) => {
  const style = useStyle(width, height);
  return <View style={style} />;
};
