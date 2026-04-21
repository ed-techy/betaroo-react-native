import { StyleSheet, Text, View } from "react-native";

import {
  confidenceTierStyles,
  getConfidenceTierFromValue,
} from "@/components/opportunity/confidence-tier";
import { radius, spacing, typography } from "@/tokens";

type ConfidenceBadgeProps = {
  value: number | string;
};

export function ConfidenceBadge({ value }: ConfidenceBadgeProps) {
  const tier = getConfidenceTierFromValue(value);
  const palette = confidenceTierStyles[tier];

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
