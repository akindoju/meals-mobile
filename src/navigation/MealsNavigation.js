import { Platform } from "react-native";
import Colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import FavouritesScreen from "../screens/FavouritesScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const MealsStackNavigation = createStackNavigator(
  {
    CategoriesScreen: CategoriesScreen,
    CategoryMealsScreen: CategoryMealsScreen,
    MealDetailsScreen: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavouritesStackNavigation = createStackNavigator(
  {
    FavouritesScreen: FavouritesScreen,
    MealDetailsScreen: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenConfig = {
  MealsStackNavigation: {
    screen: MealsStackNavigation,
    navigationOptions: {
      tabBarLabel: "Meals",
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
    },
  },
  FavouritesScreen: {
    screen: FavouritesStackNavigation,
    navigationOptions: {
      tabBarLabel: "Favourites",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.secondary,
    },
  },
};

const MealsTabNavigation =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.secondary,
        },
      });

export default createAppContainer(MealsTabNavigation);
