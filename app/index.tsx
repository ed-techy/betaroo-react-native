import { StyleSheet, Text, View } from "react-native";

import { ConfidenceBadge } from "@/components/opportunity/ConfidenceBadge";
import { L5PercentagePill } from "@/components/opportunity/L5PercentagePill";
import { darkTheme, spacing, typography } from "@/tokens";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Betaroo RN Test Task</Text>
      <View style={styles.badgesRow}>
        <ConfidenceBadge value="ELITE" />
        <ConfidenceBadge value="STRONG" />
        <ConfidenceBadge value="FAIR" />
        <ConfidenceBadge value="RISKY" />
      </View>
      <View style={styles.badgesRow}>
        <L5PercentagePill value={99} />
        <L5PercentagePill value={85} />
        <L5PercentagePill value={45} />
        <L5PercentagePill value={15} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: spacing[24],
    backgroundColor: darkTheme.background.base,
  },
  title: {
    ...typography.headingMedium,
    color: darkTheme.text.primary,
    marginBottom: spacing[8],
  },
  badgesRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[8],
    flexWrap: "wrap",
    marginBottom: spacing[8],
  },
});
