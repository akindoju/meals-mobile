import React from "react";
import { CATEGORIES, MEALS } from "../data/dummyData";
import MealList from "../components/MealList";

const CategoryMealsScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <MealList displayedList={displayedMeals} navigationProp={navigation} />
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
