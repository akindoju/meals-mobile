import React from "react";
import { StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummyData";

const FavouritesScreen = ({ navigation }) => {
  const favouriteMeal = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );

  return <MealList displayedList={favouriteMeal} navigationProp={navigation} />;
};

FavouritesScreen.navigationOptions = {
  headerTitle: "Your Favourites",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavouritesScreen;
