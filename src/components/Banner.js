import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image, Pressable } from "native-base";

const Banner = () => {
  return (
    <Pressable style={styles.container}>
      <Image
        source={require("../assets/images/img.jpg")}
        width={"100%"}
        height={"100%"}
        alt="banner"
      />
    </Pressable>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    with: "100%",
    height: 260,
    marginVertical: 10,
  },
});
