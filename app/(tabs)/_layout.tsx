import { Tabs } from "expo-router";

export default function TabsLayout() {
  return <Tabs>
    <Tabs.Screen name="index" options={{ title: "Sticker Smash", headerLeft: () => <></>}}/>
    <Tabs.Screen name="about" options={{ title: "About"}}/>
    <Tabs.Screen name="+not-found" options={{ headerShown: false }}/>
  </Tabs>;
}
