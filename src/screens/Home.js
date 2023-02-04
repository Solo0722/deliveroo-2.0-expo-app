import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../constants/globalStyles";
import {
  Actionsheet,
  Box,
  HStack,
  Icon,
  IconButton,
  useDisclose,
} from "native-base";
import colors from "../constants/colors";
import Searchbar from "../components/Searchbar";
import { Ionicons } from "@expo/vector-icons";
import { FILTEROPTIONS } from "../constants/routeNames";
import { useNavigation } from "@react-navigation/native";
import CuisineTypes from "../containers/CuisineTypes";
import FeaturedRow from "../containers/FeaturedRow";
import Banner from "../components/Banner";

const Home = () => {
  const { navigate } = useNavigation();

  return (
    <ScrollView style={styles.homeContainer}>
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
        <CuisineTypes />
        <Banner />
        <FeaturedRow
          data={new Array(5)}
          heading={"Top picks near you"}
          orientation={"horizontal"}
        />
        <FeaturedRow
          data={new Array(5)}
          heading={"Most favorite places"}
          orientation={"horizontal"}
          subHeading={"Selected places specially for you"}
        />
        <FeaturedRow
          data={new Array(5)}
          heading={"Most favorite places"}
          orientation={"horizontal"}
          subHeading={"Selected places specially for you"}
        />
        {/* <FeaturedRow /> */}
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
