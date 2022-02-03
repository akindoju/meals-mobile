import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";

const MealList = ({ displayedList, navigationProp }) => {
  const renderedMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        imageUrl={itemData.item.imageUrl}
        onSelectMeal={() => {
          navigationProp.navigate({
            routeName: "MealDetailsScreen",
            params: { mealId: itemData.item.id },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedList}
        keyExtractor={(item, index) => item.id}
        renderItem={renderedMealItem}
        style={{ width: "100%" }}
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

export default MealList;
