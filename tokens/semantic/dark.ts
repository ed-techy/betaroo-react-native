import { colors } from "../primitives/colors";

export const darkTheme = {
  background: {
    base: colors.gray[950],
    primary: colors.gray[900],
    secondary: colors.gray[800],
    tertiary: colors.gray[700],
    dark: "#202020",
    weak: colors.gray[600],
    weaker: colors.gray[400],
    other: colors.gray[950],
  },
  text: {
    primary: colors.gray[0],
    secondary: colors.gray[300],
    tertiary: colors.gray[400],
    light: colors.gray[500],
    disabled: colors.gray[600],
    other: colors.gray[950],
  },
  border: {
    base: colors.gray[950],
    primary: colors.gray[800],
    secondary: colors.gray[600],
    tertiary: colors.gray[500],
    dark: "#202020",
    inverse: colors.gray[0],
  },
  icon: {
    primary: colors.gray[0],
    secondary: colors.gray[400],
    tertiary: colors.gray[500],
    disabled: colors.gray[600],
    other: colors.gray[950],
  },
  state: {
    faded: { dark: colors.gray[300], base: colors.gray[500], light: colors.alpha.gray.alpha24, lighter: colors.alpha.gray.alpha10 },
    info: { dark: colors.blue[400], base: colors.blue[500], light: colors.alpha.blue.alpha24 },
    warning: { dark: colors.orange[400], base: colors.orange[600] },
    error: { dark: colors.red[400], base: colors.red[600], light: colors.alpha.red.alpha24 },
    success: { dark: colors.green[400], base: colors.green[600], light: colors.alpha.green.alpha16, lighter: colors.alpha.green.alpha10 },
    away: { dark: colors.yellow[400], base: colors.yellow[600] },
    feature: { dark: colors.purple[400], base: colors.purple[500] },
    verified: { dark: colors.sky[400], base: colors.sky[600] },
    highlighted: { dark: colors.pink[400], base: colors.pink[600] },
    stable: { dark: colors.teal[400], base: colors.teal[600] },
  },
  brand: {
    darker: colors.brand[800],
    dark: colors.brand[600],
    base: colors.brand[500],
    light: colors.brand[100],
    lighter: colors.brand[50],
  },
  primary: {
    darkest: colors.brand[800],
    dark: colors.brand[600],
    base: colors.brand[500],
    light: colors.brand[100],
    lighter: colors.brand[50],
  },
} as const;

export type DarkThemeTokens = typeof darkTheme;
