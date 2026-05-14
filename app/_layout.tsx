import { Stack, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

// prevent the splash from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Tommy-Regular": require("../assets/fonts/Tommy-Regular.otf"),
    "Tommy-Thin": require("../assets/fonts/Tommy-Thin.otf"),
    "Okine-Light": require("../assets/fonts/Okine-Light.otf"),
    "Okine-Medium": require("../assets/fonts/Okine-Medium.otf"),
    "Tommy-Light": require("../assets/fonts/Tommy-Light.otf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="guides" options={{ headerShown: false }} />
      <Stack.Screen name="watch" options={{ headerShown: false }} />
      {/* <Stack.Screen name="[id]" options={{ headerShown: false }} />] */}
      <Stack.Screen
        name="activitiesList"
        options={{
          headerShown: true,
          headerBackVisible: true,
          headerBackTitle: "Back",
          title: "Activities",
        }}
      />
      <Stack.Screen
        name="category"
        options={{
          headerShown: false,
        }}
      />
      {/* TODO */}
      {/* <Stack.Screen name="search/[query]" options={{headerShown:false}}/> */}
    </Stack>
  );
}
