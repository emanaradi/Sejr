import { Stack, SplashScreen } from "expo-router";

// prevent the splash from auto-hiding before asset loading is complete.

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ headerShown: false }} />]
    </Stack>
  );
}
