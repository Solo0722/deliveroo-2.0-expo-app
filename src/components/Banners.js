import { StyleSheet, Text } from "react-native";
import React from "react";
import {
  Image,
  Pressable,
  FlatList,
  Heading,
  Box,
  VStack,
  Icon,
  View,
} from "native-base";
import { useState } from "react";
import { bannersQuery } from "../helpers/sanity/sanityQueries";
import { client } from "../helpers/sanity/sanityClient";
import BannerSkeleton from "./BannerSkeleton";
import colors from "../constants/colors";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Banners = () => {
  const [banners, setBanners] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBanners = () => {
    setLoading(true);
    client
      .fetch(bannersQuery)
      .then(async (result) => {
        setBanners(result);
        await AsyncStorage.setItem("banners", JSON.stringify(result));
      })
      .finally(() => setLoading(false));
  };

  const getBannersFromStorage = async () => {
    setLoading(true);
    const jsonData = await AsyncStorage.getItem("banners");
    const data = jsonData === null ? null : JSON.parse(jsonData);
    setBanners(data);
    setLoading(false);
  };

  useEffect(() => {
    getBannersFromStorage();
    if (banners === null) {
      fetchBanners();
    }
  }, []);

  const renderItem = ({ item }) => (
    <Pressable android_ripple={{ color: "#e5e7eb" }} style={styles.card}>
      <Image
        source={{ uri: item && item.imageUrl }}
        width={"100%"}
        height={"100%"}
        alt="imgBg"
        resizeMode="cover"
        resizeMethod="auto"
        borderTopRadius={2}
      />
    </Pressable>
  );

  const renderSkeleton = () => <BannerSkeleton />;

  return (
    <FlatList
      // style={{ width: "100%" }}
      ListHeaderComponent={<View pl={15} />}
      ListFooterComponent={<View pr={15} />}
      ItemSeparatorComponent={<View mx={7.5} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={!loading && banners ? banners : new Array(10)}
      renderItem={loading ? renderSkeleton : renderItem}
      estimatedItemSize={banners?.length || 15}
      overScrollMode="never"
    />
  );
};

export default Banners;

const styles = StyleSheet.create({
  card: {
    width: 400,
    height: 260,
    elevation: 2,
    shadowColor: "rgba(0,0,0,0.5)",
    backgroundColor: `${colors.WHITE}`,
    borderRadius: 2,
    flex: 1,
  },
});
