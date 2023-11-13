import { FC } from "react";
import { View } from "react-native";

import {
  CalendarIcon,
  ClockIcon,
  LocationIcon,
  PersonIcon,
} from "@/src/components/icons";

import { useDate, useTime } from "./EventInfo.hooks";
import { styles } from "./EventInfoBoxes.styles";
import { InfoBoxRow } from "./InfoBoxRow";

type Props = {
  datetime: Date;
  location: string;
  organizer: string;
};

/** @package */
export const EventInfoBoxes: FC<Props> = ({
  datetime,
  location,
  organizer,
}) => {
  const date = useDate(datetime);
  const time = useTime(datetime);

  return (
    <View style={styles.container}>
      <InfoBoxRow
        infoList={[
          {
            text: date,
            label: "日付",
            icon: <CalendarIcon />,
          },
          {
            text: time,
            label: "時間",
            icon: <ClockIcon />,
          },
        ]}
      />
      <InfoBoxRow
        infoList={[
          {
            text: location,
            label: "場所",
            icon: <LocationIcon />,
          },
          {
            text: organizer,
            label: "主催",
            icon: <PersonIcon />,
          },
        ]}
      />
    </View>
  );
};
