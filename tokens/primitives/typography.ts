import { StyleSheet } from "react-native";

export const fontFamily = {
  heading: "Manrope",
  body: "Inter",
  mono: "DM Mono",
} as const;

export const typography = StyleSheet.create({
  displayExtraLarge: { fontFamily: "Manrope", fontSize: 128, lineHeight: 128, letterSpacing: -3.84, fontWeight: "600" },
  displayLarge: { fontFamily: "Manrope", fontSize: 96, lineHeight: 96, letterSpacing: -2.3, fontWeight: "600" },
  displayMedium: { fontFamily: "Manrope", fontSize: 72, lineHeight: 72, letterSpacing: -1.58, fontWeight: "600" },
  displaySmall: { fontFamily: "Manrope", fontSize: 60, lineHeight: 60, letterSpacing: -1.2, fontWeight: "600" },
  displayTiny: { fontFamily: "Manrope", fontSize: 48, lineHeight: 48, letterSpacing: -0.96, fontWeight: "600" },
  headingLarge: { fontFamily: "Manrope", fontSize: 36, lineHeight: 40, letterSpacing: -0.07, fontWeight: "600" },
  headingMedium: { fontFamily: "Manrope", fontSize: 30, lineHeight: 36, letterSpacing: -0.06, fontWeight: "600" },
  headingSmall: { fontFamily: "Manrope", fontSize: 24, lineHeight: 32, letterSpacing: -0.048, fontWeight: "600" },
  headingXSmall: { fontFamily: "Manrope", fontSize: 20, lineHeight: 26, letterSpacing: -0.04, fontWeight: "600" },
  headingTiny: { fontFamily: "Manrope", fontSize: 14, lineHeight: 16, letterSpacing: -0.028, fontWeight: "600" },
  paragraphXLarge: { fontFamily: "Inter", fontSize: 24, lineHeight: 32, letterSpacing: 0, fontWeight: "400" },
  paragraphLarge: { fontFamily: "Inter", fontSize: 18, lineHeight: 24, letterSpacing: 0, fontWeight: "400" },
  paragraphRegular: { fontFamily: "Inter", fontSize: 16, lineHeight: 24, letterSpacing: 0, fontWeight: "400" },
  paragraphSmall: { fontFamily: "Inter", fontSize: 14, lineHeight: 20, letterSpacing: 0, fontWeight: "400" },
  paragraphXSmall: { fontFamily: "Inter", fontSize: 13, lineHeight: 18, letterSpacing: 0, fontWeight: "400" },
  paragraphTiny: { fontFamily: "Inter", fontSize: 12, lineHeight: 16, letterSpacing: 0, fontWeight: "400" },
  paragraphMini: { fontFamily: "Inter", fontSize: 10, lineHeight: 12, letterSpacing: 0, fontWeight: "400" },
  labelXLarge: { fontFamily: "Inter", fontSize: 24, lineHeight: 32, letterSpacing: -0.34, fontWeight: "500" },
  labelLarge: { fontFamily: "Inter", fontSize: 18, lineHeight: 24, letterSpacing: -0.22, fontWeight: "500" },
  labelRegular: { fontFamily: "Inter", fontSize: 16, lineHeight: 24, letterSpacing: -0.19, fontWeight: "500" },
  labelSmall: { fontFamily: "Inter", fontSize: 14, lineHeight: 20, letterSpacing: -0.14, fontWeight: "500" },
  labelXSmall: { fontFamily: "Inter", fontSize: 13, lineHeight: 18, letterSpacing: -0.13, fontWeight: "500" },
  labelTiny: { fontFamily: "Inter", fontSize: 12, lineHeight: 16, letterSpacing: -0.096, fontWeight: "500" },
  labelXTiny: { fontFamily: "Inter", fontSize: 10, lineHeight: 12, letterSpacing: -0.08, fontWeight: "500" },
  subheadingMedium: { fontFamily: "Inter", fontSize: 16, lineHeight: 24, letterSpacing: 1.92, fontWeight: "500" },
  subheadingSmall: { fontFamily: "Inter", fontSize: 14, lineHeight: 20, letterSpacing: 1.68, fontWeight: "500" },
  subheadingXSmall: { fontFamily: "Inter", fontSize: 12, lineHeight: 16, letterSpacing: 1.44, fontWeight: "500" },
  subheadingXXSmall: { fontFamily: "Inter", fontSize: 11, lineHeight: 12, letterSpacing: 1.32, fontWeight: "500" },
  monoRegular: { fontFamily: "DM Mono", fontSize: 16, lineHeight: 24, letterSpacing: 0, fontWeight: "500" },
  monoSmall: { fontFamily: "DM Mono", fontSize: 14, lineHeight: 20, letterSpacing: 0, fontWeight: "500" },
  monoCompact: { fontFamily: "DM Mono", fontSize: 12, lineHeight: 16, letterSpacing: 0, fontWeight: "500" },
  monoTiny: { fontFamily: "DM Mono", fontSize: 10, lineHeight: 16, letterSpacing: 0, fontWeight: "500" },
});

export type FontFamily = typeof fontFamily;
export type Typography = typeof typography;
