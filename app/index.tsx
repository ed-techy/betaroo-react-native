import { StyleSheet, Text, View } from "react-native";

import { ConfidenceBadge } from "@/components/opportunity/ConfidenceBadge";
import { PercentagePill } from "@/components/opportunity/PercentagePill";
import { PlayerOpportunityCard } from "@/components/opportunity/PlayerOpportunityCard";
import { TeamOpportunityCard } from "@/components/opportunity/TeamOpportunityCard";
import { PreferredLeaguesSelect } from "@/components/select/PreferredLeaguesSelect";
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
        <PercentagePill value={99} label="L5" />
        <PercentagePill value={85} label="L10" />
        <PercentagePill value={45} label="L20" />
        <PercentagePill value={15} label="L5" />
      </View>
      <PreferredLeaguesSelect />
      <View style={styles.cardGap} />
      <TeamOpportunityCard />
      <View style={styles.cardGap} />
      <PlayerOpportunityCard />
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
  cardGap: {
    height: spacing[8],
  },
});
