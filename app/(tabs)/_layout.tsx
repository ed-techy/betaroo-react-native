import { Tabs } from "expo-router";

import { colors } from "@/tokens";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.gray[950],
          borderTopColor: colors.gray[800],
        },
        tabBarActiveTintColor: colors.gray[0],
        tabBarInactiveTintColor: colors.gray[500],
      }}
    >
      <Tabs.Screen name="atoms" options={{ title: "Atoms" }} />
      <Tabs.Screen name="cards" options={{ title: "Cards" }} />
      <Tabs.Screen name="select" options={{ title: "Select" }} />
    </Tabs>
  );
}
