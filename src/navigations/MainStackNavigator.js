import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import {
  BRAND,
  FILTEROPTIONS,
  GOOGLEAUTH,
  HOME,
  LOCATIONPICKER,
  MAINSEARCH,
} from "../constants/routeNames";
import Home from "../screens/Home";
import colors from "../constants/colors";
import {
  Actionsheet,
  Box,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  useDisclose,
  VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import GoogleAuth from "../screens/GoogleAuth";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import LocationPicker from "../screens/LocationPicker";
import MainSearch from "../screens/MainSearch";
import FilterOptions from "../screens/FilterOptions";
import Brand from "../screens/Brand";

const MainStack = createStackNavigator();

const MainStackNavigator = ({ navigation }) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { navigate } = useNavigation();

  return (
    <MainStack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: `${colors.BODY}` },
        headerTitleStyle: { fontFamily: "inter-light" },
        headerStyle: {
          elevation: 0,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: {
            animation: "timing",
            config: {
              duration: 500,
            },
          },
          close: {
            animation: "timing",
            config: {
              duration: 500,
            },
          },
        },
      }}
    >
      <MainStack.Screen
        name={HOME}
        component={Home}
        options={{
          header: () => (
            <Box width={"100%"} height={100} style={styles.header}>
              <HStack space={2}>
                <Image
                  source={require("../assets/images/bike.png")}
                  alt="bike"
                  width={"10"}
                  height={"10"}
                />
                <VStack space={1}>
                  <Heading
                    size={"xs"}
                    fontWeight={"hairline"}
                    color={"coolGray.400"}
                    onPress={onOpen}
                  >
                    Now
                  </Heading>
                  <Heading size={"sm"} onPress={onOpen}>
                    Selected location
                    <Icon
                      as={Ionicons}
                      name="chevron-down"
                      color={"primary.500"}
                    />
                  </Heading>
                </VStack>
              </HStack>
              <HStack>
                <IconButton
                  icon={
                    <Icon
                      as={Ionicons}
                      name="person-outline"
                      color={"primary.500"}
                    />
                  }
                  borderRadius="full"
                  variant={"subtle"}
                  colorScheme="coolGray"
                  // backgroundColor={"coolGray.100"}
                  onPress={() => navigate(GOOGLEAUTH)}
                />
              </HStack>
              <Actionsheet isOpen={isOpen} onClose={onClose} borderRadius={0}>
                <Actionsheet.Content>
                  <Box w="100%" px={4} justifyContent="center">
                    <VStack space={4} my={5}>
                      <Heading fontWeight={"bold"} size={"sm"}>
                        Your location
                      </Heading>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        flexDirection="row"
                      >
                        <HStack space={2}>
                          <Icon
                            as={Ionicons}
                            name="location-outline"
                            color={"muted.500"}
                            size={"md"}
                          />
                          <Heading fontWeight="hairline" size={"xs"}>
                            Selected location
                          </Heading>
                        </HStack>
                        <Heading
                          fontWeight="hairline"
                          size={"xs"}
                          color={"primary.500"}
                          onPress={() => {
                            onClose();
                            navigate(LOCATIONPICKER);
                          }}
                        >
                          Change
                        </Heading>
                      </Box>
                    </VStack>
                    {/* time of delivery view */}
                    <VStack space={4} my={5}>
                      <Heading fontWeight={"bold"} size={"sm"}>
                        Arrival time
                      </Heading>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        flexDirection="row"
                      >
                        <HStack space={2}>
                          <Icon
                            as={Ionicons}
                            name="time-outline"
                            color={"muted.500"}
                            size={"md"}
                          />
                          <Heading fontWeight="hairline" size={"xs"}>
                            Now
                          </Heading>
                        </HStack>
                        <Heading
                          fontWeight="hairline"
                          size={"xs"}
                          color={"primary.500"}
                        >
                          Change
                        </Heading>
                      </Box>
                    </VStack>
                  </Box>
                </Actionsheet.Content>
              </Actionsheet>
            </Box>
          ),
        }}
      />
      <MainStack.Screen
        name={BRAND}
        component={Brand}
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => <BackButton />,
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
        }}
      />
      <MainStack.Screen
        name={GOOGLEAUTH}
        component={GoogleAuth}
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => <BackButton />,
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
        }}
      />
      <MainStack.Screen
        name={LOCATIONPICKER}
        component={LocationPicker}
        options={{
          headerTitle: "Select location",
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: "inter-semibold",
          },
          headerLeft: () => (
            <BackButton
              styles={{
                color: `${colors.PRIMARY_COLOR}`,
                backgroundColor: "transparent",
              }}
            />
          ),
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerRight: () => (
            <IconButton
              icon={
                <Icon
                  as={<Ionicons name="search-outline" />}
                  color="primary.500"
                />
              }
            />
          ),
          headerRightContainerStyle: {
            paddingRight: 5,
          },
        }}
      />
      <MainStack.Screen
        name={MAINSEARCH}
        component={MainSearch}
        options={{
          headerTitle: "",
          headerRight: () => (
            <Input
              cursorColor={`${colors.PRIMARY_COLOR}`}
              autoFocus
              variant={"unstyled"}
              placeholder="Restaurants, groceries, dishes"
            />
          ),
          headerRightContainerStyle: {
            width: "100%",
          },
          headerLeft: () => (
            <BackButton
              styles={{
                color: `${colors.PRIMARY_COLOR}`,
                backgroundColor: "transparent",
              }}
            />
          ),
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
        }}
      />
      <MainStack.Screen
        name={FILTEROPTIONS}
        component={FilterOptions}
        options={{
          headerTitle: "Filters",
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: "inter-semibold",
          },
          headerLeft: () => (
            <BackButton
              iconName={"close"}
              styles={{
                color: `${colors.PRIMARY_COLOR}`,
                backgroundColor: "transparent",
              }}
            />
          ),
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    paddingBottom: 7,
    backgroundColor: `${colors.WHITE}`,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // elevation: 1,
  },
});
