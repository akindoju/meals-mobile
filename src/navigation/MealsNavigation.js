import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import { createStackNavigator } from "react-navigation-stack";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import Colors from "../constants/colors";
import { Platform } from "react-native";

const MealsNavigation = createStackNavigator(
  {
    CategoriesScreen: CategoriesScreen,
    CategoryMealsScreen: CategoryMealsScreen,
    MealDetailsScreen: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(MealsNavigation);
