import React, { FC } from "react"
import { Text, ViewProps, TouchableOpacity, Linking } from "react-native"

import tw from "src/utils/tailwind"

export interface AuthorTagProps extends ViewProps {
  author: string
}

const AuthorTag: FC<AuthorTagProps> = ({ author, style, ...otherProps }) => (
  <TouchableOpacity
    onPress={() => Linking.openURL(`https://reddit.com/${author}`)}
    activeOpacity={0.6}
    style={[tw("bg-teal-500", "px-2 py-1", "rounded-full"), style]}
    {...otherProps}
  >
    <Text style={tw("text-xs text-white font-medium")}>{author}</Text>
  </TouchableOpacity>
)

export default AuthorTag
