import type { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import {
  ChevronRightIcon,
  InfoIcon,
  OddsBookIcon,
  PlusIcon,
  ShareIcon,
} from "@/components/opportunity/icons/OpportunityIcons";
import { PercentagePill } from "@/components/opportunity/PercentagePill";
import { colors, radius, spacing, typography } from "@/tokens";

type OpportunityCardShellProps = {
  league: string;
  gameTime: string;
  lValues: [number, number, number];
  odds: string;
  centerContent: ReactNode;
};

function MetaDot() {
  return <View style={styles.metaDot} />;
}

function IconButton({ children }: { children: ReactNode }) {
  return (
    <Pressable style={styles.headerIconButton} hitSlop={6}>
      {children}
    </Pressable>
  );
}

export function OpportunityCardShell({
  league,
  gameTime,
  lValues,
  odds,
  centerContent,
}: OpportunityCardShellProps) {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <Text style={styles.metaPrimary}>{league}</Text>
          <MetaDot />
          <Text style={styles.metaSecondary}>{gameTime}</Text>
        </View>
        <View style={styles.topRight}>
          <IconButton>
            <InfoIcon />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </View>
      </View>

      <View style={styles.center}>{centerContent}</View>

      <View style={styles.bottom}>
        <View style={styles.statsRow}>
          <View style={styles.leftStats}>
            <PercentagePill value={lValues[0]} label="L5" />
            <View style={styles.statDivider} />
            <PercentagePill value={lValues[1]} label="L10" />
            <View style={styles.statDivider} />
            <PercentagePill value={lValues[2]} label="L20" />
          </View>

          <View style={styles.rightRow}>
            <View style={styles.oddsPill}>
              <OddsBookIcon />
              <Text style={styles.oddsText}>{odds}</Text>
            </View>
            <Pressable style={styles.plusButton} hitSlop={6}>
              <PlusIcon />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

export const opportunityCardShellStyles = StyleSheet.create({
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[8],
  },
  body: {
    flex: 1,
    gap: spacing[2],
  },
  headerRow: {
    height: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[8],
  },
  market: {
    ...typography.paragraphTiny,
    color: "#A4A4A4",
  },
});

const styles = StyleSheet.create({
  card: {
    width: 358,
    height: 126,
    backgroundColor: colors.gray[900],
    borderColor: "#202020",
    borderWidth: 1,
    borderRadius: radius.lg,
    overflow: "hidden",
  },
  top: {
    height: 26,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: spacing[6],
    paddingBottom: spacing[6],
    paddingHorizontal: spacing[8],
    paddingLeft: spacing[12],
    borderBottomColor: "#202020",
    borderBottomWidth: 1,
  },
  topLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[6],
  },
  metaPrimary: {
    ...typography.monoTiny,
    color: "#A4A4A4",
    letterSpacing: -0.08,
    lineHeight: 12,
  },
  metaSecondary: {
    ...typography.monoTiny,
    color: colors.gray[600],
    letterSpacing: -0.08,
    lineHeight: 12,
  },
  metaDot: {
    width: 2,
    height: 2,
    borderRadius: radius.full,
    backgroundColor: colors.gray[700],
  },
  topRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[6],
  },
  headerIconButton: {
    width: 14,
    height: 14,
    borderRadius: radius.sm,
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    height: 64,
    justifyContent: "center",
    padding: spacing[12],
  },
  bottom: {
    height: 36,
    borderTopColor: "#202020",
    borderTopWidth: 1,
    paddingHorizontal: spacing[12],
    paddingVertical: spacing[8],
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftStats: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[6],
  },
  statDivider: {
    width: 1,
    height: 18,
    backgroundColor: colors.gray[800],
  },
  rightRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[4],
  },
  oddsPill: {
    height: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[2],
    backgroundColor: colors.gray[800],
    borderRadius: 5,
    justifyContent: "center",
    paddingHorizontal: spacing[4],
    minWidth: 51,
  },
  oddsText: {
    ...typography.monoCompact,
    color: colors.gray[0],
    lineHeight: 16,
  },
  plusButton: {
    width: 20,
    height: 20,
    backgroundColor: colors.gray[800],
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
});
