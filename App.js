import { useState } from "react";
import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View } from "react-native";
import MealsStackNavigation from "./src/navigation/MealsNavigation";
import { enableScreens } from "react-native-screens";

enableScreens();

const fetchFonts = () => {
  return Fonts.loadAsync({
    lexendDeca: require("./assets/fonts/LexendDeca-Regular.ttf"),
    lexendDecaBold: require("./assets/fonts/LexendDeca-Bold.ttf"),
  });
};

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  if (!isFontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return <MealsStackNavigation />;
}

const styles = StyleSheet.create({});
