import { RefreshControl, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { globalStyles } from "../constants/globalStyles";
import {
  Actionsheet,
  Box,
  HStack,
  Icon,
  IconButton,
  useDisclose,
  ScrollView,
  View,
} from "native-base";
import colors from "../constants/colors";
import Searchbar from "../components/Searchbar";
import { Ionicons } from "@expo/vector-icons";
import { FILTEROPTIONS } from "../constants/routeNames";
import { useNavigation } from "@react-navigation/native";
import CuisineTypes from "../containers/CuisineTypes";
import FeaturedRow from "../containers/FeaturedRow";
import Banners from "../components/Banners";
import { client } from "../helpers/sanity/sanityClient";
import { mainCollectionsQuery } from "../helpers/sanity/sanityQueries";
import BannerSkeleton from "../components/BannerSkeleton";
import CardSkeleton from "../components/CardSkeleton";
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";

const Home = () => {
  const { navigate } = useNavigation();
  const [collections, setCollections] = useState(null);
  const [loading, setLoading] = useState(false);
  const [globalRefresh, setGlobalRefresh] = useState(false);

  const fetchMainCollections = () => {
    setLoading(true);
    client
      .fetch(mainCollectionsQuery)
      .then(async (result) => {
        setCollections(result);
        await AsyncStorage.setItem("collections", JSON.stringify(result));
      })
      .finally(() => setLoading(false));
  };

  const getCollectionsFromStorage = async () => {
    setLoading(true);
    const jsonData = await AsyncStorage.getItem("collections");
    const data = jsonData === null ? null : JSON.parse(jsonData);
    setCollections(data);
    setLoading(false);
  };

  useEffect(() => {
    getCollectionsFromStorage();
    if (collections === null) {
      fetchMainCollections();
    }
  }, []);

  return (
    <ScrollView
      style={styles.homeContainer}
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
    >
      <Box style={styles.homeHeader}>
        <HStack space={1}>
          <Searchbar />
          <IconButton
            w={"15%"}
            icon={
              <Icon
                as={Ionicons}
                name="options-outline"
                color={"primary.500"}
                size={"lg"}
              />
            }
            variant={"subtle"}
            _pressed={{
              backgroundColor: "coolGray.100",
            }}
            // borderRadius={"full"}
            onPress={() => navigate(FILTEROPTIONS)}
            backgroundColor={"white"}
          />
        </HStack>
      </Box>
      <Box style={styles.homeBody}>
        {/* <CuisineTypes />
        <Banners /> */}
        {/* {loading ? (
          <CardSkeleton orientation={"horizontal"} />
        ) : (
          <FeaturedRow
            data={collections ? collections[0].brands : []}
            heading={collections ? collections[0]?.title : null}
            subHeading={collections ? collections[0]?.subTitle : null}
            orientation={"horizontal"}
          />
        )}

        {loading ? (
          <CardSkeleton orientation={"horizontal"} />
        ) : (
          <FeaturedRow
            data={collections ? collections[1]?.brands : []}
            heading={collections ? collections[1]?.title : null}
            subHeading={collections ? collections[1]?.subTitle : null}
            orientation={"horizontal"}
          />
        )}
        {loading ? (
          <CardSkeleton orientation={"horizontal"} />
        ) : (
          <FeaturedRow
            data={collections ? collections[2]?.brands : []}
            heading={collections ? collections[2]?.title : null}
            subHeading={collections ? collections[2]?.subTitle : null}
            orientation={"horizontal"}
          />
        )} */}
      </Box>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  homeHeader: {
    width: "100%",
    backgroundColor: `${colors.WHITE}`,
    padding: 15,
    paddingVertical: 7,
    paddingBottom: 15,
    zIndex: 10,
    // elevation: 1,
  },
  homeBody: {
    paddingVertical: 15,
    width: "100%",
  },
});
