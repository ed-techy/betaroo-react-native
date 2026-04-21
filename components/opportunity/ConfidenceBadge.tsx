import { StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, typography } from "@/tokens";

export type ConfidenceTier = "ELITE" | "STRONG" | "FAIR" | "RISKY";

type ConfidenceBadgeProps = {
  value: number | string;
};

const tierStyles: Record<
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

const getTierFromValue = (value: number | string): ConfidenceTier => {
  if (typeof value === "string") {
    const normalized = value.trim().toUpperCase() as ConfidenceTier;
    if (normalized in tierStyles) {
      return normalized;
    }
    return "RISKY";
  }

  if (value >= 90) return "ELITE";
  if (value >= 70) return "STRONG";
  if (value >= 40) return "FAIR";
  return "RISKY";
};

export function ConfidenceBadge({ value }: ConfidenceBadgeProps) {
  const tier = getTierFromValue(value);
  const palette = tierStyles[tier];

  return (
    <View style={[styles.badge, { backgroundColor: palette.backgroundColor }]}>
      <Text style={[styles.label, { color: palette.color }]}>{tier}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    height: 18,
    padding: spacing[4],
    borderRadius: radius.sm,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  label: {
    ...typography.monoCompact,
    lineHeight: 12,
    letterSpacing: 0.24, // 0.02em at 12px
  },
});
