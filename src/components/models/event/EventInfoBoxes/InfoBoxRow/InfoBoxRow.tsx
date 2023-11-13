import { FC } from "react";
import { View } from "react-native";

import { EventInfo } from "../EventInfo";
import { InfoBox } from "../InfoBox";
import { styles } from "./InfoBoxRow.styles";

type Props = {
  infoList: [EventInfo, EventInfo];
};

/** @package */
export const InfoBoxRow: FC<Props> = ({ infoList }) => {
  return (
    <View style={styles.container}>
      {infoList.map((info) => {
        return <InfoBox info={info} key={info.label} />;
      })}
    </View>
  );
};
