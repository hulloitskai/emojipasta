import React, { FC } from "react";
import { View, ViewProps } from "react-native";

import select from "src/utils/select";
import elevation from "src/style/elevation";
import useColorScheme from "src/hooks/useColorScheme";
import tw from "src/utils/tailwind";

export interface CardProps extends ViewProps {}

const Card: FC<CardProps> = ({ style, children, ...otherProps }) => {
  const scheme = useColorScheme();
  return (
    <View
      style={[
        tw("rounded-2xl p-6"),
        select(scheme, {
          light: tw("bg-white"),
          dark: tw("bg-gray-800"),
        }),
        select(scheme, {
          light: elevation(6),
          dark: elevation(12),
        }),
        style,
      ]}
      {...otherProps}
    >
      {children}
    </View>
  );
};

export default Card;
