import { StyleSheet, Text, View } from "react-native";

import {
  confidenceTierStyles,
  getConfidenceTierFromValue,
} from "@/components/opportunity/confidence-tier";
import { colors, radius, spacing, typography } from "@/tokens";

type L5PercentagePillProps = {
  value: number;
};

export function L5PercentagePill({ value }: L5PercentagePillProps) {
  const tier = getConfidenceTierFromValue(value);
  const palette = confidenceTierStyles[tier];

  return (
    <View style={styles.container}>
      <View
        style={[styles.l5Badge, { backgroundColor: palette.backgroundColor }]}
      >
        <Text style={[styles.l5Label, { color: palette.color }]}>L5</Text>
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
  l5Badge: {
    width: 23,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing[4],
    borderRadius: radius.sm,
  },
  l5Label: {
    ...typography.monoCompact,
    lineHeight: 12,
    letterSpacing: 0.24,
  },
  percentage: {
    ...typography.paragraphTiny,
    color: colors.gray[0],
  },
});
