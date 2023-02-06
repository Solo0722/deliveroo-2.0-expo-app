import { StyleSheet, Text } from "react-native";
import React from "react";
import colors from "../constants/colors";
import { Box, Heading, Icon, Image, Pressable, VStack } from "native-base";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { remarks } from "../constants/general";

const FeaturedRowCard = ({ item }) => {
  return (
    <Pressable android_ripple={{ color: "" }} style={styles.card}>
      <Box flex={0.7}>
        <Image
          source={{ uri: item.imageUrl }}
          width={"100%"}
          height={"100%"}
          alt="imgBg"
          resizeMode="cover"
          resizeMethod="auto"
          borderTopRadius={2}
        />
      </Box>
      <Box flex={0.3} p={2} justifyContent={"center"}>
        <VStack space={2}>
          <Heading fontWeight={"bold"} size={"sm"} textTransform={"capitalize"}>
            {item.name}
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
            {item.rating} {remarks(item.rating)} (367)
          </Heading>
          <Heading
            fontWeight={"hairline"}
            size={"xs"}
            color={"coolGray.500"}
            fontSize={13}
            pt={0.5}
          >
            0.4 miles away{" "}
            <Icon
              as={<Entypo name="dot-single" />}
              // color="cool.500"
              size={"xs"}
            />{" "}
            ${item.deliveryFee} delivery
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
            {item.deliveryTime}
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
