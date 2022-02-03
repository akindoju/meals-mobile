import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const MealDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Details Screen</Text>
      <Button
        title="Category Meals"
        onPress={() => navigation.navigate("CategoryMealsScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailsScreen;
