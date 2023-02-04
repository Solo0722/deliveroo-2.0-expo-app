import { StyleSheet, Text } from "react-native";
import React from "react";
import colors from "../constants/colors";
import { Box, Heading, Icon, Image, Pressable, VStack } from "native-base";
import { Ionicons, Entypo } from "@expo/vector-icons";

const FeaturedRowCard = () => {
  return (
    <Pressable android_ripple={{ color: "" }} style={styles.card}>
      <Box flex={0.7}>
        <Image
          source={require("../assets/images/img.jpg")}
          width={"100%"}
          height={"100%"}
          alt="imgBg"
          borderTopRadius={2}
        />
      </Box>
      <Box flex={0.3} p={2} justifyContent={"center"}>
        <VStack space={2}>
          <Heading fontWeight={"bold"} size={"sm"}>
            PIZZA EXPRESS
          </Heading>
          <Heading
            fontWeight={"hairline"}
            size={"xs"}
            color={"primary.500"}
            fontSize={13}
            pt={0.5}
          >
            <Icon
              as={<Ionicons name="star" />}
              color="primary.500"
              size={"xs"}
            />{" "}
            4.5 Very Good (367)
          </Heading>
          <Heading
            fontWeight={"hairline"}
            size={"xs"}
            color={"coolGray.500"}
            fontSize={13}
            pt={0.5}
          >
            0.0 miles away{" "}
            <Icon
              as={<Entypo name="dot-single" />}
              // color="cool.500"
              size={"xs"}
            />{" "}
            $0.49 delivery
          </Heading>
        </VStack>
      </Box>
      <Box
        position={"absolute"}
        top={"55%"}
        right={5}
        borderRadius={"full"}
        bgColor={"white"}
        shadow={1}
        zIndex={2}
        px={5}
        py={2}
      >
        <VStack>
          <Heading fontWeight={"hairline"} size={"xs"} textAlign="center">
            10 - 20
          </Heading>
          <Heading
            textAlign="center"
            fontWeight={"hairline"}
            size={"xs"}
            color={"coolGray.500"}
            fontSize={13}
            pt={0.5}
          >
            min
          </Heading>
        </VStack>
      </Box>
    </Pressable>
  );
};

export default FeaturedRowCard;

const styles = StyleSheet.create({
  card: {
    width: 260,
    height: 260,
    elevation: 2,
    shadowColor: "rgba(0,0,0,0.5)",
    backgroundColor: `${colors.WHITE}`,
    borderRadius: 2,
    flex: 1,
  },
});
