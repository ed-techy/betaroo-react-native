import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

import { colors, radius, spacing, typography } from "@/tokens";

const LEAGUES = ["NBA", "NFL", "MLB", "NHL"] as const;
type League = (typeof LEAGUES)[number];

function BasketballIcon({ color }: { color: string }) {
  return (
    <Svg width={15} height={15} viewBox="0 0 15 15" fill="none">
      <Path
        d="M7.7745 8.52451L9.10575 9.29325C8.31101 11.0535 8.22744 13.0528 8.8725 14.8733C8.41991 14.9579 7.96044 15.0004 7.5 15C6.43726 15.0017 5.38638 14.7767 4.4175 14.34L7.7745 8.52451V8.52451ZM10.4123 10.0485L13.5878 11.8815C12.7606 13.0296 11.6264 13.9212 10.3155 14.454C9.81622 13.1059 9.81835 11.6232 10.3215 10.2765L10.4123 10.0485V10.0485ZM5.145 7.00651L6.47625 7.77451L3.11925 13.587C1.87748 12.6926 0.938155 11.4406 0.42675 9.99826C2.23899 9.6636 3.86403 8.67202 4.9905 7.21351L5.145 7.00651V7.00651ZM14.9295 6.46201C14.9768 6.80176 15.0007 7.14825 15.0007 7.50001C15.0024 8.56275 14.7774 9.61362 14.3408 10.5825L11.1638 8.74875C12.0582 7.56819 13.3584 6.76097 14.8132 6.48301L14.9295 6.46201V6.46201ZM0.66075 4.41826L3.837 6.25201C2.91779 7.46505 1.57144 8.28289 0.0712501 8.5395C0.0237636 8.19504 -4.22646e-05 7.84773 5.6327e-08 7.50001C5.6327e-08 6.40125 0.23625 5.35801 0.66 4.41751L0.66075 4.41826ZM11.8815 1.41226C13.1233 2.30665 14.0626 3.55864 14.574 5.00101C12.7614 5.33634 11.1362 6.32839 10.0095 7.78726L9.85575 7.99426L8.5245 7.2255L11.8815 1.41301V1.41226ZM7.5 5.29831e-06C8.59875 5.29831e-06 9.642 0.236255 10.5825 0.660005L7.2255 6.4755L5.89425 5.70751C6.68939 3.94682 6.77296 1.94689 6.1275 0.126005C6.58012 0.0416367 7.03959 -0.000544116 7.5 5.29831e-06V5.29831e-06ZM4.68525 0.547505C5.18378 1.89585 5.18112 3.37846 4.67775 4.72501L4.58775 4.95226L1.41225 3.11851C2.20743 2.01524 3.28666 1.14802 4.53525 0.609005L4.68525 0.546755V0.547505Z"
        fill={color}
      />
    </Svg>
  );
}

function DropdownBasketballIcon({ color }: { color: string }) {
  return (
    <Svg width={15} height={15} viewBox="0 0 15 15" fill="none">
      <Path
        d="M7.5 15C3.35775 15 0 11.6422 0 7.5C0 3.35775 3.35775 0 7.5 0C11.6422 0 15 3.35775 15 7.5C15 11.6422 11.6422 15 7.5 15ZM5.7825 13.2502C5.04256 11.6807 4.6139 9.98266 4.52025 8.25H1.5465C1.69244 9.40417 2.17044 10.4911 2.92243 11.3788C3.67441 12.2664 4.66801 12.9166 5.7825 13.2502ZM6.0225 8.25C6.13575 10.0792 6.6585 11.7975 7.5 13.314C8.36424 11.7574 8.86908 10.0271 8.9775 8.25H6.0225ZM13.4535 8.25H10.4797C10.3861 9.98266 9.95744 11.6807 9.2175 13.2502C10.332 12.9166 11.3256 12.2664 12.0776 11.3788C12.8296 10.4911 13.3076 9.40417 13.4535 8.25ZM1.5465 6.75H4.52025C4.6139 5.01734 5.04256 3.31926 5.7825 1.74975C4.66801 2.08341 3.67441 2.73356 2.92243 3.62122C2.17044 4.50888 1.69244 5.59583 1.5465 6.75ZM6.02325 6.75H8.97675C8.86856 4.97295 8.36398 3.24265 7.5 1.686C6.63576 3.24259 6.13092 4.97289 6.0225 6.75H6.02325ZM9.2175 1.74975C9.95744 3.31926 10.3861 5.01734 10.4797 6.75H13.4535C13.3076 5.59583 12.8296 4.50888 12.0776 3.62122C11.3256 2.73356 10.332 2.08341 9.2175 1.74975Z"
        fill={color}
      />
    </Svg>
  );
}

function ChevronIcon({
  progress,
}: {
  progress: Animated.AnimatedInterpolation<string | number>;
}) {
  return (
    <Animated.View style={{ transform: [{ rotate: progress }] }}>
      <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
        <Path
          d="M5 7.5L10 12.5L15 7.5"
          stroke="#A4A4A4"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
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
        <DropdownBasketballIcon color="#A4A4A4" />
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
          <BasketballIcon color={iconColor} />
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
