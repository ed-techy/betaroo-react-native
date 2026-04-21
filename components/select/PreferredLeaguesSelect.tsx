import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import {
  ChevronDownIcon,
  SelectDropdownBasketballIcon,
  SelectTriggerBasketballIcon,
} from "@/components/icons";
import { colors, radius, spacing, typography } from "@/tokens";

const LEAGUES = ["NBA", "NFL", "MLB", "NHL"] as const;
type League = (typeof LEAGUES)[number];

function ChevronIcon({
  progress,
}: {
  progress: Animated.AnimatedInterpolation<string | number>;
}) {
  return (
    <Animated.View style={{ transform: [{ rotate: progress }] }}>
      <ChevronDownIcon color="#A4A4A4" />
    </Animated.View>
  );
}

function LeagueRow({
  label,
  selected,
  onPress,
  animatedValue,
}: {
  label: League;
  selected: boolean;
  onPress: () => void;
  animatedValue: Animated.Value;
}) {
  const bg = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.gray[950], colors.gray[800]],
  });

  const scale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.985],
  });

  return (
    <Pressable onPress={onPress}>
      <Animated.View
        style={[
          styles.dropdownItem,
          {
            backgroundColor: bg,
            transform: [{ scale }],
          },
        ]}
      >
        <SelectDropdownBasketballIcon color="#A4A4A4" />
        <View style={styles.itemTextWrap}>
          <Text style={styles.itemText}>{label}</Text>
        </View>
        {selected ? <Text style={styles.check}>✓</Text> : null}
      </Animated.View>
    </Pressable>
  );
}

export function PreferredLeaguesSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<League[]>([]);

  const expand = useRef(new Animated.Value(0)).current;
  const itemAnimations = useRef(
    LEAGUES.map(() => new Animated.Value(0)),
  ).current;

  const hasValue = selected.length > 0;
  const displayText = hasValue ? selected.join(", ") : "Select leagues...";

  const rotate = expand.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const dropdownHeight = expand.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 152],
  });

  const dropdownOpacity = expand.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const contentColor = open || hasValue ? colors.gray[0] : colors.gray[400];
  const iconColor = open ? colors.gray[400] : colors.gray[500];

  const toggleOpen = () => {
    const toValue = open ? 0 : 1;
    setOpen(!open);
    Animated.timing(expand, {
      toValue,
      duration: 220,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  };

  const toggleLeague = (league: League, idx: number) => {
    const isSelected = selected.includes(league);
    setSelected((prev) =>
      isSelected ? prev.filter((item) => item !== league) : [...prev, league],
    );

    Animated.sequence([
      Animated.timing(itemAnimations[idx], {
        toValue: isSelected ? 0.15 : 1,
        duration: 120,
        useNativeDriver: false,
      }),
      Animated.spring(itemAnimations[idx], {
        toValue: isSelected ? 0 : 1,
        friction: 8,
        tension: 90,
        useNativeDriver: false,
      }),
    ]).start();
  };

  useEffect(() => {
    LEAGUES.forEach((league, idx) => {
      itemAnimations[idx].setValue(selected.includes(league) ? 1 : 0);
    });
  }, [itemAnimations, selected]);

  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>Preferred Leagues</Text>
        <Text style={styles.required}>*</Text>
      </View>

      <Pressable onPress={toggleOpen}>
        <View style={[styles.trigger, open && styles.triggerFocus]}>
          <SelectTriggerBasketballIcon color={iconColor} />
          <Text
            style={[styles.triggerText, { color: contentColor }]}
            numberOfLines={1}
          >
            {displayText}
          </Text>
          <ChevronIcon progress={rotate} />
        </View>
      </Pressable>

      <Animated.View
        style={[
          styles.dropdownContainer,
          {
            height: dropdownHeight,
            opacity: dropdownOpacity,
            marginTop: open ? spacing[8] : 0,
          },
        ]}
      >
        {LEAGUES.map((league, idx) => (
          <LeagueRow
            key={league}
            label={league}
            selected={selected.includes(league)}
            onPress={() => toggleLeague(league, idx)}
            animatedValue={itemAnimations[idx]}
          />
        ))}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 358,
    gap: spacing[4],
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  label: {
    ...typography.labelTiny,
    color: colors.gray[400],
  },
  required: {
    ...typography.labelTiny,
    color: colors.brand[500],
  },
  trigger: {
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[8],
    backgroundColor: colors.gray[950],
    borderColor: colors.gray[800],
    borderWidth: 1,
    borderRadius: radius.md,
    paddingVertical: spacing[8],
    paddingLeft: spacing[10],
    paddingRight: spacing[8],
    shadowColor: "#0A0D14",
    shadowOpacity: 0.03,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 1,
  },
  triggerFocus: {
    borderColor: colors.gray[0],
    shadowColor: colors.slate[400],
    shadowOpacity: 0.16,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 0 },
    elevation: 0,
  },
  triggerText: {
    ...typography.paragraphSmall,
    flex: 1,
  },
  dropdownContainer: {
    width: 358,
    overflow: "hidden",
    backgroundColor: colors.gray[950],
    borderColor: colors.gray[800],
    borderWidth: 1,
    borderRadius: radius.md,
    padding: spacing[4],
    gap: 0,
  },
  dropdownItem: {
    height: 36,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing[8],
    paddingHorizontal: spacing[8],
    marginBottom: spacing[2],
  },
  itemTextWrap: {
    flex: 1,
  },
  itemText: {
    ...typography.labelSmall,
    color: colors.gray[0],
  },
  check: {
    ...typography.labelSmall,
    color: colors.brand[500],
  },
});
