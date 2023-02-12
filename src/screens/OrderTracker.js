import { StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  View,
  VStack,
} from "native-base";
import colors from "../constants/colors";
import BackButton from "../components/BackButton";
import { HOME } from "../constants/routeNames";

const OrderTracker = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitleStyle: { display: "none" },
      headerTitle: "",

      headerLeft: () => (
        <BackButton
          styles={{ color: "white", backgroundColor: "transparent" }}
          iconName={"close"}
          handlePress={() => navigation.navigate(HOME)}
        />
      ),
      headerLeftContainerStyle: {
        paddingLeft: 10,
      },
      headerRight: () => (
        <Button variant={"ghost"} size={"sm"} colorScheme={"dark"}>
          Order help
        </Button>
      ),
      headerRightContainerStyle: {
        paddingRight: 10,
      },

      headerStyle: {
        backgroundColor: `${colors.PRIMARY_COLOR}`,
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <View bgColor={"primary.400"} flex={0.1}></View>
      <View flex={0.9}>
        <Image
          source={{
            uri: "https://cdn.dribbble.com/users/118459/screenshots/7025288/media/76c7f0aae651f067c46d5f6ab0840aee.gif",
          }}
          width={"100%"}
          height={"100%"}
          alt={"delivery-gif"}
          resizeMode="cover"
          resizeMethod="scale"
        />
      </View>
      <View w={"full"} position={"absolute"} top={5} p={4}>
        <Box
          p={4}
          shadow={"1"}
          bgColor={`${colors.BODY}`}
          borderRadius={4}
          w={"full"}
        >
          <VStack space={4}>
            <Box
              display={"flex"}
              flexDirection="row"
              justifyContent={"space-between"}
            >
              <VStack space={2}>
                <Heading
                  fontWeight="hairline"
                  size={"xs"}
                  color={"coolGray.500"}
                >
                  Estimated time of arrival
                </Heading>
                <Heading fontWeight="extrabold" size={"md"}>
                  19:00 - 19:20
                </Heading>
              </VStack>
              <Image
                source={require("../assets/images/bike.png")}
                alt="bike"
                width={"10"}
                height={"10"}
              />
            </Box>
            <HStack space={1} w={"full"}>
              <Divider height={"2"} w={"30%"} bgColor={"primary.400"} />
              <Divider height={"2"} w={"68%"} bgColor={"coolGray.200"} />
            </HStack>
            <Heading fontWeight="hairline" size={"xs"} color={"coolGray.500"}>
              Your order is out for delivery
            </Heading>
          </VStack>
        </Box>
      </View>
    </View>
  );
};

export default OrderTracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
