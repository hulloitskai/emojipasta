import { useState, useEffect } from "react";
import { loadAsync as loadFont } from "expo-font";
import {
  preventAutoHideAsync as preventAutoHideSplashScreen,
  hideAsync as hideSplashScreen,
} from "expo-splash-screen";

import { Feather, Ionicons } from "@expo/vector-icons";
import * as Inter from "@expo-google-fonts/inter";

const useCachedResources = () => {
  const [loaded, setLoaded] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function load() {
      try {
        preventAutoHideSplashScreen();

        // Load fonts.
        await loadFont({
          ...Feather.font,
          ...Ionicons.font,
          Inter_100: Inter.Inter_100Thin,
          Inter_200: Inter.Inter_200ExtraLight,
          Inter_300: Inter.Inter_300Light,
          Inter_400: Inter.Inter_400Regular,
          Inter_500: Inter.Inter_500Medium,
          Inter_600: Inter.Inter_600SemiBold,
          Inter_700: Inter.Inter_700Bold,
          Inter_800: Inter.Inter_800ExtraBold,
          Inter_900: Inter.Inter_900Black,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service.
        console.warn(e);
      } finally {
        setLoaded(true);
        hideSplashScreen();
      }
    }

    load();
  }, []);

  return loaded;
};

export default useCachedResources;
