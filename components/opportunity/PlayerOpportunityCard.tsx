import {
  Image,
  type ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { ConfidenceBadge } from "@/components/opportunity/ConfidenceBadge";
import {
  OpportunityCardShell,
  opportunityCardShellStyles,
} from "@/components/opportunity/OpportunityCardShell";
import { PlayerTeamLogo } from "@/components/opportunity/logos/PlayerTeamLogo";
import { colors, radius, spacing, typography } from "@/tokens";

type PlayerOpportunityCardProps = {
  league: string;
  gameTime: string;
  playerName: string;
  position: string;
  marketLabel: string;
  confidence: number | string;
  lValues: [number, number, number];
  odds: string;
  playerImageSource: ImageSourcePropType;
};

const defaultProps: PlayerOpportunityCardProps = {
  league: "CEL @ GSW",
  gameTime: "FRI 10AM",
  playerName: "Derrick White",
  position: "SG",
  marketLabel: "+6 Assists",
  confidence: "STRONG",
  lValues: [75, 72, 71],
  odds: "+172",
  playerImageSource: require("@/assets/images/derrick-white.png"),
};

function PositionBadge({ label }: { label: string }) {
  return (
    <View style={styles.positionBadge}>
      <Text style={styles.positionLabel}>{label}</Text>
    </View>
  );
}

function PlayerAvatar({ imageSource }: { imageSource: ImageSourcePropType }) {
  return (
    <View style={styles.playerAvatar}>
      <View style={styles.playerImageFrame}>
        <Image source={imageSource} style={styles.playerImage} />
      </View>
      <View style={styles.playerTeamDot}>
        <PlayerTeamLogo />
      </View>
    </View>
  );
}

export function PlayerOpportunityCard(
  props: Partial<PlayerOpportunityCardProps>,
) {
  const {
    league,
    gameTime,
    playerName,
    position,
    marketLabel,
    confidence,
    lValues,
    odds,
    playerImageSource,
  } = {
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
          <PlayerAvatar imageSource={playerImageSource} />
          <View style={opportunityCardShellStyles.body}>
            <View style={opportunityCardShellStyles.headerRow}>
              <View style={styles.nameplate}>
                <Text style={styles.playerName} numberOfLines={1}>
                  {playerName}
                </Text>
                <PositionBadge label={position} />
              </View>
              <ConfidenceBadge value={confidence} />
            </View>
            <Text style={opportunityCardShellStyles.market}>{marketLabel}</Text>
          </View>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  playerAvatar: {
    width: 34,
    height: 34,
    borderRadius: radius.full,
    backgroundColor: "#BB9753",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "visible",
  },
  playerImageFrame: {
    width: 34,
    height: 34,
    borderRadius: radius.full,
    overflow: "hidden",
  },
  playerImage: {
    width: "100%",
    height: "100%",
  },
  playerTeamDot: {
    position: "absolute",
    right: -2,
    bottom: -1,
    width: 14,
    height: 14,
    borderRadius: radius.full,
    backgroundColor: "#008348",
    borderColor: colors.gray[900],
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nameplate: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[4],
  },
  playerName: {
    ...typography.labelSmall,
    color: colors.gray[0],
    lineHeight: 20,
  },
  positionBadge: {
    width: 15,
    minWidth: 12,
    height: 12,
    padding: 2,
    borderRadius: radius.sm,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.alpha.gray.alpha10,
  },
  positionLabel: {
    fontFamily: typography.monoTiny.fontFamily,
    fontSize: 9,
    lineHeight: 10,
    letterSpacing: 0.18,
    color: colors.gray[500],
  },
});
