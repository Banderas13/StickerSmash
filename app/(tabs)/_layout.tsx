import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
  return <Tabs
    screenOptions={{
        tabBarActiveTintColor: "orange",
        headerStyle: {
            backgroundColor: '#25292e',
          },
          headerShadowVisible: false,
          headerTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#25292e',
            },
    }}
  >
    <Tabs.Screen name="index" options={{ 
        title: "Sticker Smash",
        tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}/>
    <Tabs.Screen name="about" options={{ 
        title: "About",
        tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}/>
    <Tabs.Screen name="+not-found" options={{ headerShown: false }}/>
  </Tabs>;
}
