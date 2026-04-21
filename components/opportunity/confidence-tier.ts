import { colors } from "@/tokens";

export type ConfidenceTier = "ELITE" | "STRONG" | "FAIR" | "RISKY";

export const confidenceTierStyles: Record<
  ConfidenceTier,
  { backgroundColor: string; color: string }
> = {
  ELITE: {
    backgroundColor: colors.pink[600],
    color: colors.gray[0],
  },
  STRONG: {
    backgroundColor: colors.alpha.green.alpha10,
    color: colors.green[400],
  },
  FAIR: {
    backgroundColor: colors.alpha.yellow.alpha16,
    color: colors.yellow[400],
  },
  RISKY: {
    backgroundColor: colors.alpha.red.alpha16,
    color: colors.red[400],
  },
};

export const getConfidenceTierFromValue = (
  value: number | string
): ConfidenceTier => {
  if (typeof value === "string") {
    const normalized = value.trim().toUpperCase() as ConfidenceTier;
    if (normalized in confidenceTierStyles) {
      return normalized;
    }
    return "RISKY";
  }

  if (value >= 90) return "ELITE";
  if (value >= 70) return "STRONG";
  if (value >= 40) return "FAIR";
  return "RISKY";
};
