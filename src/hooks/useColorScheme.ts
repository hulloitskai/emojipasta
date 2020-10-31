import {
  ColorSchemeName as _ColorSchemeName,
  useColorScheme as _useColorScheme,
} from "react-native"

export type ColorSchemeName = NonNullable<_ColorSchemeName>

const useColorScheme = (): ColorSchemeName =>
  _useColorScheme() as ColorSchemeName

export default useColorScheme
