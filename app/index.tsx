import { StyleSheet, Text, View } from "react-native";

import { ConfidenceBadge } from "@/components/opportunity/ConfidenceBadge";
import { lightTheme, spacing, typography } from "@/tokens";

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: spacing[24],
    backgroundColor: lightTheme.background.base,
  },
  title: {
    ...typography.headingMedium,
    color: lightTheme.text.primary,
    marginBottom: spacing[8],
  },
  badgesRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[8],
    flexWrap: "wrap",
  },
});
