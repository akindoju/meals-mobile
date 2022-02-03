import React from "react";
import Colors from "../constants/colors";
import { CATEGORIES } from "../data/dummyData";
import { Text, View, StyleSheet, Button, Platform } from "react-native";

const CategoryMealsScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return (
    <View style={styles.screen}>
      <Text>The Categories Meals Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Categories"
        onPress={() => navigation.navigate({ routeName: "CategoriesScreen" })}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
