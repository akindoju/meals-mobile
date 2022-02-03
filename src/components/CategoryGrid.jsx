import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import { Fonts } from "../constants/fonts";

const CategoryGrid = ({ title, onSelect, color }) => {
  let TouchableCmp = TouchableNativeFeedback;

  if (Platform.OS === "ios") {
    TouchableCmp = TouchableOpacity;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp onPress={onSelect}>
        <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 15,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5,
  },

  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontFamily: Fonts.lexendDeca,
    fontSize: 17,
    textAlign: "center",
  },
});

export default CategoryGrid;
