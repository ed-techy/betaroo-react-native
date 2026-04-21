import { darkTheme } from "./dark";
import { lightTheme } from "./light";

export const semantic = {
  dark: darkTheme,
  light: lightTheme,
} as const;

export type SemanticTokens = typeof semantic;
