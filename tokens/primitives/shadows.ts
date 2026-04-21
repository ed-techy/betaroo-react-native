export const shadows = {
  neutral: {
    xsmall: { shadowColor: "#0A0D14", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.03, shadowRadius: 2, elevation: 1 },
    medium: { shadowColor: "#0E121B", shadowOffset: { width: 0, height: 16 }, shadowOpacity: 0.1, shadowRadius: 32, elevation: 4 },
    customXsmall: { shadowColor: "#333333", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 2 },
    customSmall: { shadowColor: "#333333", shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.08, shadowRadius: 5, elevation: 3 },
    customMedium: { shadowColor: "#333333", shadowOffset: { width: 0, height: 24 }, shadowOpacity: 0.04, shadowRadius: 24, elevation: 4 },
    customLarge: { shadowColor: "#333333", shadowOffset: { width: 0, height: 48 }, shadowOpacity: 0.04, shadowRadius: 48, elevation: 6 },
    cardLarge: { shadowColor: "#262626", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 1, shadowRadius: 0, elevation: 2 },
    tooltip: { shadowColor: "#171717", shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.15, shadowRadius: 24, elevation: 5 },
    dropdown: { shadowColor: "#171717", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.1, shadowRadius: 16, elevation: 3 },
  },
  colored: {
    gray: { shadowColor: "#333333", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.08, shadowRadius: 16, elevation: 3 },
    blue: { shadowColor: "#122368", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.12, shadowRadius: 16, elevation: 4 },
    purple: { shadowColor: "#351a75", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.12, shadowRadius: 16, elevation: 4 },
    orange: { shadowColor: "#71330a", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.12, shadowRadius: 16, elevation: 4 },
    green: { shadowColor: "#0b4627", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.12, shadowRadius: 16, elevation: 4 },
    primary: { shadowColor: "#dfff51", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.16, shadowRadius: 16, elevation: 4 },
  },
} as const;

export type Shadows = typeof shadows;
