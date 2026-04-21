import { StyleSheet } from "react-native";

export const fontFamily = {
  heading: "Manrope_600SemiBold",
  headingBold: "Manrope_700Bold",
  body: "Inter_400Regular",
  bodyMedium: "Inter_500Medium",
  mono: "DMMono_500Medium",
} as const;

export const typography = StyleSheet.create({
  displayExtraLarge: { fontFamily: "Manrope_600SemiBold", fontSize: 128, lineHeight: 128, letterSpacing: -3.84 },
  displayLarge: { fontFamily: "Manrope_600SemiBold", fontSize: 96, lineHeight: 96, letterSpacing: -2.3 },
  displayMedium: { fontFamily: "Manrope_600SemiBold", fontSize: 72, lineHeight: 72, letterSpacing: -1.58 },
  displaySmall: { fontFamily: "Manrope_600SemiBold", fontSize: 60, lineHeight: 60, letterSpacing: -1.2 },
  displayTiny: { fontFamily: "Manrope_600SemiBold", fontSize: 48, lineHeight: 48, letterSpacing: -0.96 },
  headingLarge: { fontFamily: "Manrope_600SemiBold", fontSize: 36, lineHeight: 40, letterSpacing: -0.07 },
  headingMedium: { fontFamily: "Manrope_600SemiBold", fontSize: 30, lineHeight: 36, letterSpacing: -0.06 },
  headingSmall: { fontFamily: "Manrope_600SemiBold", fontSize: 24, lineHeight: 32, letterSpacing: -0.048 },
  headingXSmall: { fontFamily: "Manrope_600SemiBold", fontSize: 20, lineHeight: 26, letterSpacing: -0.04 },
  headingTiny: { fontFamily: "Manrope_600SemiBold", fontSize: 14, lineHeight: 16, letterSpacing: -0.028 },
  paragraphXLarge: { fontFamily: "Inter_400Regular", fontSize: 24, lineHeight: 32, letterSpacing: 0 },
  paragraphLarge: { fontFamily: "Inter_400Regular", fontSize: 18, lineHeight: 24, letterSpacing: 0 },
  paragraphRegular: { fontFamily: "Inter_400Regular", fontSize: 16, lineHeight: 24, letterSpacing: 0 },
  paragraphSmall: { fontFamily: "Inter_400Regular", fontSize: 14, lineHeight: 20, letterSpacing: 0 },
  paragraphXSmall: { fontFamily: "Inter_400Regular", fontSize: 13, lineHeight: 18, letterSpacing: 0 },
  paragraphTiny: { fontFamily: "Inter_400Regular", fontSize: 12, lineHeight: 16, letterSpacing: 0 },
  paragraphMini: { fontFamily: "Inter_400Regular", fontSize: 10, lineHeight: 12, letterSpacing: 0 },
  labelXLarge: { fontFamily: "Inter_500Medium", fontSize: 24, lineHeight: 32, letterSpacing: -0.34 },
  labelLarge: { fontFamily: "Inter_500Medium", fontSize: 18, lineHeight: 24, letterSpacing: -0.22 },
  labelRegular: { fontFamily: "Inter_500Medium", fontSize: 16, lineHeight: 24, letterSpacing: -0.19 },
  labelSmall: { fontFamily: "Inter_500Medium", fontSize: 14, lineHeight: 20, letterSpacing: -0.14 },
  labelXSmall: { fontFamily: "Inter_500Medium", fontSize: 13, lineHeight: 18, letterSpacing: -0.13 },
  labelTiny: { fontFamily: "Inter_500Medium", fontSize: 12, lineHeight: 16, letterSpacing: -0.096 },
  labelXTiny: { fontFamily: "Inter_500Medium", fontSize: 10, lineHeight: 12, letterSpacing: -0.08 },
  subheadingMedium: { fontFamily: "Inter_500Medium", fontSize: 16, lineHeight: 24, letterSpacing: 1.92 },
  subheadingSmall: { fontFamily: "Inter_500Medium", fontSize: 14, lineHeight: 20, letterSpacing: 1.68 },
  subheadingXSmall: { fontFamily: "Inter_500Medium", fontSize: 12, lineHeight: 16, letterSpacing: 1.44 },
  subheadingXXSmall: { fontFamily: "Inter_500Medium", fontSize: 11, lineHeight: 12, letterSpacing: 1.32 },
  monoRegular: { fontFamily: "DMMono_500Medium", fontSize: 16, lineHeight: 24, letterSpacing: 0 },
  monoSmall: { fontFamily: "DMMono_500Medium", fontSize: 14, lineHeight: 20, letterSpacing: 0 },
  monoCompact: { fontFamily: "DMMono_500Medium", fontSize: 12, lineHeight: 16, letterSpacing: 0 },
  monoTiny: { fontFamily: "DMMono_500Medium", fontSize: 10, lineHeight: 16, letterSpacing: 0 },
});

export type FontFamily = typeof fontFamily;
export type Typography = typeof typography;
