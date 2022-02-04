import React from "react";
import { MEALS } from "../data/dummyData";
import MealList from "../components/MealList";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const FavoritesScreen = ({ navigation }) => {
  const favouriteMeals = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );
  return (
    <MealList displayedList={favouriteMeals} navigationProps={navigation} />
  );
};

FavoritesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
