import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import theme from "./src/global/styles/theme";
import { Routes } from "./src/routes/index";
import { AppRoutes } from "./src/routes/app.routes";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { SignIn } from "./src/screens/SignIn";

import { AuthProvider, useAuth } from "./src/hooks/auth";

import "intl";
import "intl/locale-data/jsonp/pt-BR";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_700Bold,
        });
        const { userStorageLoading } = useAuth();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <View
          onLayout={onLayoutRootView}
          style={{
            flex: 1,
          }}
        >
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </View>
      </ThemeProvider>
    </>
  );
}
