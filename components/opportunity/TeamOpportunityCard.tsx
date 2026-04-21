import { StyleSheet, Text, View } from "react-native";

import { ConfidenceBadge } from "@/components/opportunity/ConfidenceBadge";
import {
  OpportunityCardShell,
  opportunityCardShellStyles,
} from "@/components/opportunity/OpportunityCardShell";
import { colors, radius, spacing, typography } from "@/tokens";

type TeamMeta = {
  code: string;
  shortName: string;
  logoColor: string;
};

type TeamOpportunityCardProps = {
  league: string;
  gameTime: string;
  homeTeam: TeamMeta;
  awayTeam: TeamMeta;
  market: string;
  confidence: number | string;
  lValues: [number, number, number];
  odds: string;
};

const defaultProps: TeamOpportunityCardProps = {
  league: "OKC @ CHT",
  gameTime: "FRI 10AM",
  homeTeam: {
    code: "OKC",
    shortName: "Oklahoma City Thunder",
    logoColor: "#EF5133",
  },
  awayTeam: {
    code: "CHT",
    shortName: "Chicago Bulls",
    logoColor: "#CE1141",
  },
  market: "Moneyline",
  confidence: 99,
  lValues: [80, 80, 80],
  odds: "+172",
};

function TeamLogos({ homeTeam, awayTeam }: Pick<TeamOpportunityCardProps, "homeTeam" | "awayTeam">) {
  return (
    <View style={styles.teams}>
      <View style={[styles.teamLogo, styles.awayLogo, { backgroundColor: awayTeam.logoColor }]}>
        <Text style={styles.teamLogoCode}>{awayTeam.code}</Text>
      </View>
      <View style={[styles.teamLogo, styles.homeLogo, { backgroundColor: homeTeam.logoColor }]}>
        <Text style={styles.teamLogoCode}>{homeTeam.code}</Text>
      </View>
    </View>
  );
}

export function TeamOpportunityCard(props: Partial<TeamOpportunityCardProps>) {
  const { league, gameTime, homeTeam, awayTeam, market, confidence, lValues, odds } = {
    ...defaultProps,
    ...props,
  };

  return (
    <OpportunityCardShell
      league={league}
      gameTime={gameTime}
      lValues={lValues}
      odds={odds}
      centerContent={
        <View style={opportunityCardShellStyles.featureRow}>
          <TeamLogos homeTeam={homeTeam} awayTeam={awayTeam} />
          <View style={opportunityCardShellStyles.body}>
            <View style={styles.headerRow}>
              <Text style={styles.title} numberOfLines={1}>
                {homeTeam.shortName}
              </Text>
              <ConfidenceBadge value={confidence} />
            </View>
            <Text style={opportunityCardShellStyles.market}>{market}</Text>
          </View>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  teams: {
    width: 58,
    height: 34,
    justifyContent: "center",
  },
  teamLogo: {
    width: 34,
    height: 34,
    borderRadius: radius.full,
    position: "absolute",
    left: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  homeLogo: {
    left: 0,
  },
  awayLogo: {
    opacity: 0.2,
  },
  teamLogoCode: {
    ...typography.monoTiny,
    color: colors.gray[0],
    lineHeight: 12,
    letterSpacing: -0.08,
  },
  headerRow: {
    height: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[6],
  },
  title: {
    flex: 1,
    ...typography.labelSmall,
    color: colors.gray[0],
    lineHeight: 20,
  },
});
