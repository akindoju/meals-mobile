import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import { CATEGORIES } from "../data/dummyData";
import Colors from "../constants/colors";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate({
            routeName: "CategoryMealsScreen",
            params: {
              categoryId: itemData.item.id,
            },
          })
        }
        style={styles.gridItem}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
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
