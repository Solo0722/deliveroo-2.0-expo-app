import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, FlatList, Heading, Image, Pressable, View } from "native-base";
import { FlashList } from "@shopify/flash-list";
import colors from "../constants/colors";
import FoodCategorySkeleton from "../components/FoodCategorySkeleton";
import { client } from "../helpers/sanity/sanityClient";
import { foodCategoriesCollectionsQuery } from "../helpers/sanity/sanityQueries";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CuisineTypes = () => {
  const [cuisineTypes, setCuisineTypes] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCuisineTypes = () => {
    setLoading(true);
    client
      .fetch(foodCategoriesCollectionsQuery)
      .then(async (result) => {
        setCuisineTypes(result);
        await AsyncStorage.setItem("cuisineTypes", JSON.stringify(result));
      })
      .finally(() => setLoading(false));
  };

  const getCuisineTypesFromStorage = async () => {
    setLoading(true);
    const jsonData = await AsyncStorage.getItem("cuisineTypes");
    const data = jsonData === null ? null : JSON.parse(jsonData);
    setCuisineTypes(data);
    setLoading(false);
  };

  useEffect(() => {
    getCuisineTypesFromStorage();
    if (cuisineTypes === null) {
      fetchCuisineTypes();
    }
  }, []);

  const renderItem = ({ item }) => (
    <Pressable android_ripple={{ color: "#e5e7eb" }} style={styles.cuisineCard}>
      <Box height={"75%"}>
        <Image
          source={{ uri: item && item.imageUrl }}
          alt="bgimg"
          width="100%"
          height="100%"
          borderRadius={2}
          resizeMode="cover"
          resizeMethod="auto"
        />
      </Box>
      <Box height={"25%"} alignItems="flex-start" px={2} pt={1}>
        <Heading
          fontWeight={"hairline"}
          size={"xs"}
          fontSize={10}
          textTransform={"capitalize"}
        >
          {item && item.title}
        </Heading>
      </Box>
    </Pressable>
  );

  const renderSkeleton = () => <FoodCategorySkeleton />;

  return (
    <FlatList
      style={{ marginBottom: 20 }}
      ListHeaderComponent={<View pr={15} />}
      ListFooterComponent={<View pl={15} />}
      ItemSeparatorComponent={<View mx={7.5} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={!loading && cuisineTypes ? cuisineTypes : new Array(10)}
      renderItem={loading ? renderSkeleton : renderItem}
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
