import { StyleSheet, Text, View } from "react-native";

import {
  confidenceTierStyles,
  getConfidenceTierFromValue,
} from "@/components/opportunity/confidence-tier";
import { colors, radius, spacing, typography } from "@/tokens";

type PercentagePillProps = {
  value: number;
  label?: string;
};

export function PercentagePill({ value, label = "L5" }: PercentagePillProps) {
  const tier = getConfidenceTierFromValue(value);
  const palette = confidenceTierStyles[tier];

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.labelBadge,
          { backgroundColor: palette.backgroundColor },
        ]}
      >
        <Text style={[styles.label, { color: palette.color }]}>{label}</Text>
      </View>
      <Text style={styles.percentage}>{Math.round(value)}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[4],
    alignSelf: "flex-start",
  },
  labelBadge: {
    minWidth: 23,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing[4],
    borderRadius: radius.sm,
  },
  label: {
    ...typography.monoCompact,
    lineHeight: 12,
    letterSpacing: 0.24,
  },
  percentage: {
    ...typography.paragraphTiny,
    color: colors.gray[0],
  },
});
