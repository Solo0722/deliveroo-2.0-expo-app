import { StyleSheet } from "react-native";
import React from "react";
import { cuisineTypes } from "../constants/general";
import { Box, FlatList, Heading, Image, Pressable, View } from "native-base";
import { FlashList } from "@shopify/flash-list";
import colors from "../constants/colors";

const CuisineTypes = () => {
  const renderItem = ({ item }) => (
    <Pressable android_ripple={{ color: "" }} style={styles.cuisineCard}>
      <Box height={"75%"}>
        <Image
          source={require("../assets/images/img.jpg")}
          alt="bgimg"
          width="100%"
          height="100%"
          borderRadius={2}
        />
      </Box>
      <Box height={"25%"} alignItems="flex-start" px={2} pt={1}>
        <Heading fontWeight={"hairline"} size={"xs"} fontSize={10}>
          {item.slice(0, 1).toUpperCase() + item.slice(1)}
        </Heading>
      </Box>
    </Pressable>
  );

  return (
    <FlatList
      style={{ marginBottom: 20 }}
      ListHeaderComponent={<View pr={15} />}
      ListFooterComponent={<View pl={15} />}
      ItemSeparatorComponent={<View mx={7.5} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={cuisineTypes}
      renderItem={renderItem}
      estimatedItemSize={15}
      overScrollMode="never"
    />
  );
};

export default CuisineTypes;

const styles = StyleSheet.create({
  cuisineCard: {
    width: 80,
    height: 80,
    elevation: 2,
    shadowColor: "rgba(0,0,0,0.5)",
    backgroundColor: `${colors.WHITE}`,
    borderRadius: 2,
  },
});
