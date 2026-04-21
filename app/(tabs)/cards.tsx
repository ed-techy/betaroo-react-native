import { useEffect, useMemo, useRef } from "react";
import {
  Animated,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PlayerOpportunityCard } from "@/components/opportunity/PlayerOpportunityCard";
import { TeamOpportunityCard } from "@/components/opportunity/TeamOpportunityCard";
import { darkTheme, spacing, typography } from "@/tokens";

type CardRow =
  | {
      id: string;
      type: "team";
      props?: Parameters<typeof TeamOpportunityCard>[0];
    }
  | {
      id: string;
      type: "player";
      props?: Parameters<typeof PlayerOpportunityCard>[0];
    };

function AnimatedCardRow({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const enter = useRef(new Animated.Value(0)).current;
  const press = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(enter, {
      toValue: 1,
      duration: 260,
      delay: index * 40,
      useNativeDriver: true,
    }).start();
  }, [enter, index]);

  const translateY = enter.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 0],
  });

  const opacity = enter.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const scale = press.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.985],
  });

  return (
    <Pressable
      onPressIn={() => {
        Animated.timing(press, {
          toValue: 1,
          duration: 90,
          useNativeDriver: true,
        }).start();
      }}
      onPressOut={() => {
        Animated.timing(press, {
          toValue: 0,
          duration: 140,
          useNativeDriver: true,
        }).start();
      }}
    >
      <Animated.View
        style={{
          opacity,
          transform: [{ translateY }, { scale }],
        }}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
}

export default function CardsScreen() {
  const data = useMemo<CardRow[]>(
    () => [
      {
        id: "team-1",
        type: "team",
        props: {
          league: "OKC @ CHT",
          gameTime: "FRI 10AM",
          market: "Moneyline",
          confidence: 99,
          lValues: [80, 80, 80],
          odds: "+172",
        },
      },
      {
        id: "player-1",
        type: "player",
        props: {
          league: "CEL @ GSW",
          gameTime: "FRI 10AM",
          playerName: "Derrick White",
          position: "SG",
          marketLabel: "+6 Assists",
          confidence: "STRONG",
          lValues: [75, 72, 71],
          odds: "+172",
        },
      },
      {
        id: "team-2",
        type: "team",
        props: {
          league: "LAL @ BOS",
          gameTime: "SAT 7PM",
          market: "Spread",
          confidence: 73,
          lValues: [62, 58, 55],
          odds: "-110",
        },
      },
      {
        id: "player-2",
        type: "player",
        props: {
          league: "NYK @ MIA",
          gameTime: "SUN 1PM",
          playerName: "Jalen Brunson",
          position: "PG",
          marketLabel: "+24.5 Points",
          confidence: "ELITE",
          lValues: [88, 83, 79],
          odds: "+105",
        },
      },
      {
        id: "team-3",
        type: "team",
        props: {
          league: "DAL @ PHX",
          gameTime: "MON 9PM",
          market: "Total",
          confidence: "FAIR",
          lValues: [51, 49, 46],
          odds: "-102",
        },
      },
      {
        id: "player-3",
        type: "player",
        props: {
          league: "DEN @ MIN",
          gameTime: "TUE 8PM",
          playerName: "Nikola Jokić",
          position: "C",
          marketLabel: "+9.5 Rebounds",
          confidence: "RISKY",
          lValues: [42, 44, 40],
          odds: "+135",
        },
      },
    ],
    [],
  );

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Opportunity Cards</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const card =
            item.type === "team" ? (
              <TeamOpportunityCard {...(item.props ?? {})} />
            ) : (
              <PlayerOpportunityCard {...(item.props ?? {})} />
            );
          return <AnimatedCardRow index={index}>{card}</AnimatedCardRow>;
        }}
        ItemSeparatorComponent={() => <View style={{ height: spacing[12] }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: darkTheme.background.base,
    paddingTop: spacing[24],
  },
  title: {
    ...typography.headingMedium,
    color: darkTheme.text.primary,
    paddingHorizontal: spacing[24],
    marginBottom: spacing[16],
  },
  listContent: {
    paddingHorizontal: spacing[24],
    paddingBottom: spacing[24],
  },
});
