import React, { forwardRef, PropsWithChildren } from "react"
import {
  StyleSheet,
  Text as _Text,
  TextProps as _TextProps,
} from "react-native"

export interface TextProps extends _TextProps {}

const Text = forwardRef<_Text, PropsWithChildren<_TextProps>>(
  ({ style = {}, ...otherProps }, ref) => {
    const {
      fontWeight = "400",
      fontFamily: fontFamilyName = "Inter",
      ...otherStyle
    } = StyleSheet.flatten(style)
    const fontFamily = `${fontFamilyName}_${fontWeight}`
    return (
      <_Text
        ref={ref}
        style={{ fontFamily, fontWeight, ...otherStyle }}
        {...otherProps}
      />
    )
  },
)

Text.displayName = "Text"

export default Text
