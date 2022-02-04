import { StyleSheet, Text } from "react-native";
import { Fonts } from "../constants/fonts";

const DefaultText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.lexendDeca,
  },
});

export default DefaultText;
