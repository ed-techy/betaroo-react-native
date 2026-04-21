import { colors } from "../primitives/colors";

export const lightTheme = {
  background: {
    base: colors.gray[0],
    primary: colors.gray[50],
    secondary: colors.gray[100],
    tertiary: colors.gray[200],
    dark: colors.gray[900],
    weak: colors.slate[100],
    weaker: colors.slate[200],
    other: colors.gray[950],
  },
  text: {
    primary: colors.slate[950],
    secondary: colors.slate[700],
    tertiary: colors.slate[600],
    light: colors.slate[500],
    disabled: colors.slate[400],
    other: colors.gray[0],
  },
  border: {
    base: colors.slate[200],
    primary: colors.slate[300],
    secondary: colors.slate[400],
    tertiary: colors.slate[500],
    dark: colors.slate[700],
    inverse: colors.gray[0],
  },
  icon: {
    primary: colors.slate[900],
    secondary: colors.slate[700],
    tertiary: colors.slate[600],
    disabled: colors.slate[400],
    other: colors.gray[0],
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

export type LightThemeTokens = typeof lightTheme;
