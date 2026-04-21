import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PreferredLeaguesSelect } from "@/components/select/PreferredLeaguesSelect";
import { darkTheme, spacing, typography } from "@/tokens";

export default function SelectScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Select</Text>
      <PreferredLeaguesSelect />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: darkTheme.background.base,
    paddingHorizontal: spacing[24],
    paddingTop: spacing[24],
  },
  title: {
    ...typography.headingMedium,
    color: darkTheme.text.primary,
    marginBottom: spacing[16],
  },
});
