import { Platform, StatusBar, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  globalContainer: {
    width: "100%",
    height: "100%",
    padding: 15,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 15,
  },
  text: {
    fontFamily: "inter-light",
  },
});
