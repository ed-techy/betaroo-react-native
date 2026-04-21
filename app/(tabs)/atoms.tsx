import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ConfidenceBadge } from "@/components/opportunity/ConfidenceBadge";
import { PercentagePill } from "@/components/opportunity/PercentagePill";
import { darkTheme, spacing, typography } from "@/tokens";

export default function AtomsScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Atoms</Text>

        <Text style={styles.sectionTitle}>ConfidenceBadge</Text>
        <View style={styles.row}>
          <ConfidenceBadge value="ELITE" />
          <ConfidenceBadge value="STRONG" />
          <ConfidenceBadge value="FAIR" />
          <ConfidenceBadge value="RISKY" />
        </View>

        <Text style={styles.sectionTitle}>PercentagePill</Text>
        <View style={styles.row}>
          <PercentagePill value={99} label="L5" />
          <PercentagePill value={85} label="L5" />
          <PercentagePill value={45} label="L5" />
          <PercentagePill value={15} label="L5" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: darkTheme.background.base,
  },
  content: {
    paddingHorizontal: spacing[24],
    paddingTop: spacing[24],
    paddingBottom: spacing[24],
    gap: spacing[12],
  },
  title: {
    ...typography.headingMedium,
    color: darkTheme.text.primary,
  },
  sectionTitle: {
    ...typography.labelSmall,
    color: darkTheme.text.primary,
    marginTop: spacing[12],
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing[8],
    alignItems: "center",
  },
});
