import React from "react";
import { CATEGORIES } from "../data/dummyData";
import { StyleSheet, FlatList } from "react-native";
import CategoryGrid from "../components/CategoryGrid";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() =>
          navigation.navigate({
            routeName: "CategoryMealsScreen",
            params: {
              categoryId: itemData.item.id,
            },
          })
        }
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Meals Categories",
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  gridItem: {
    flex: 1,
    height: 150,
    margin: 15,
  },
});

export default CategoriesScreen;
