import React, { useCallback, useEffect, useState } from "react";
import { Text, View, StyleSheet, Switch } from "react-native";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Fonts } from "../constants/fonts";
import Colors from "../constants/colors";

const FilterSwitch = ({ label, state, onToggle, navigation }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        value={state}
        onValueChange={onToggle}
        trackColor={{ false: "", true: Colors.primary }}
        thumbColor={Colors.primary}
      />
    </View>
  );
};

const FiltersScreen = () => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  const applyFilters = useCallback(
    () => {
      const appliedFilters = {
        glutenFree: isGlutenFree,
        lactoseFree: isLactoseFree,
        vegan: isVegan,
      };
    },
    isGlutenFree,
    isLactoseFree,
    isVegan
  );

  useEffect(() => {
    navigation.setParams({ apply: applyFilters });
  }, [applyFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        onToggle={(newValue) => setIsGlutenFree(newValue)}
        state={isGlutenFree}
      />

      <FilterSwitch
        label="Lactose-free"
        onToggle={(newValue) => setIsLactoseFree(newValue)}
        state={isLactoseFree}
      />

      <FilterSwitch
        label="Vegan"
        onToggle={(newValue) => setIsVegan(newValue)}
        state={isVegan}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Filters",
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
    headerRight: () => {
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Apply"
          onPress={navigationData.navigation.getParam("apply")}
        />
      </HeaderButtons>;
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },

  title: {
    fontFamily: Fonts.lexendDecaBold,
    fontSize: 20,
    margin: 20,
    textAlign: "center",
  },

  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
});

export default FiltersScreen;
