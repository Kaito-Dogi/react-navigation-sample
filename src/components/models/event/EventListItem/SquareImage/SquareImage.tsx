import { FC } from "react";
import { Image, View } from "react-native";

import { Event } from "@/src/models/Event";

import { Date } from "../Date";
import { styles } from "./SquareImage.styles";

type Props = {
  imageUrl: Event["imageUrl"];
  datetime: Event["datetime"];
};

/** @package */
export const SquareImage: FC<Props> = ({ datetime, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.date}>
        <Date datetime={datetime} />
      </View>
    </View>
  );
};
