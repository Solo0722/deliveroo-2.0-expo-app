import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { setCustomText } from "react-native-global-props";
import { theme } from "./src/constants/nativeBaseTheme";
import { StatusBar } from "expo-status-bar";
import MainStackNavigator from "./src/navigations/MainStackNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    "inter-light": require("./src/assets/fonts/Inter-Light.ttf"),
    "inter-semibold": require("./src/assets/fonts/Inter-SemiBold.ttf"),
  });

  const customTextProps = {
    style: {
      fontFamily: "inter-light",
    },
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  // onLayoutRootView();
  setCustomText(customTextProps);

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer onReady={onLayoutRootView}>
        <MainStackNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
