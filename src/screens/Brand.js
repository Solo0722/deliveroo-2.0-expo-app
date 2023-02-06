import { StyleSheet, Text } from "react-native";
import React from "react";
import {
  Box,
  Divider,
  FlatList,
  Heading,
  HStack,
  Icon,
  Image,
  Pressable,
  VStack,
  View,
  IconButton,
} from "native-base";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { remarks } from "../constants/general";
import colors from "../constants/colors";
import BackButton from "../components/BackButton";
import { useEffect } from "react";
import { useState } from "react";
import { Animated } from "react-native";
import { useRef } from "react";

const Brand = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(item);

  const yOffset = useRef(new Animated.Value(0)).current;
  const headerOpacity = yOffset.interpolate({
    inputRange: [0, 200],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        opacity: headerOpacity,
      },
      headerTitle: item.name,
      headerTitleStyle: {
        fontSize: 16,
        fontFamily: "inter-semibold",
      },
      headerLeft: () => <BackButton />,
      headerLeftContainerStyle: {
        paddingLeft: 10,
      },
      headerBackground: () => (
        <Animated.View
          style={{
            backgroundColor: "white",
            ...StyleSheet.absoluteFillObject,
            opacity: headerOpacity,
          }}
        />
      ),
      headerTransparent: true,
    });
  }, [headerOpacity, navigation]);

  const renderItem = ({ item }) => (
    <Pressable px={4} py={4} android_ripple={{ color: "" }} style={styles.card}>
      <HStack space={2} width={"100%"}>
        <VStack space={2} width={"68%"}>
          <Heading fontWeight={"bold"} size={"sm"}>
            Royale Cheese
          </Heading>
          <Heading
            color={"coolGray.500"}
            fontWeight={"hairline"}
            size={"xs"}
            noOfLines={2}
            fontSize={13}
          >
            American, Italian, Halal, Vegan friendly, Mexican, Asian,Hispano,
            Latino, Spanish
          </Heading>
          <Heading
            fontWeight={"hairline"}
            size={"xs"}
            color={"primary.500"}
            mb={2}
            fontSize={13}
          >
            $7.59
          </Heading>
        </VStack>
        <Box width={"30%"} height={"100%"}>
          <Image
            source={require("../assets/images/img.jpg")}
            alt="img"
            width={"100%"}
            height={"100%"}
            borderRadius={2}
          />
        </Box>
      </HStack>
    </Pressable>
  );

  return (
    <Box>
      <Animated.FlatList
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: yOffset,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        style={{ backgroundColor: `${colors.BODY}` }}
        ListHeaderComponent={
          <>
            <Image
              source={{ uri: item.imageUrl }}
              alt="img"
              width={"100%"}
              height={200}
              resizeMethod="auto"
              resizeMode="cover"
            />
            <Box my={2} mx={4}>
              <Heading fontWeight={"extrabold"} size={"lg"} mb={2}>
                {item.name}
              </Heading>
              <Heading
                fontWeight={"hairline"}
                size={"xs"}
                color={"coolGray.500"}
                pt={0.5}
                mb={2}
                noOfLines={1}
              >
                {item.description}
              </Heading>
              <Heading
                fontWeight={"hairline"}
                size={"xs"}
                color={"primary.500"}
                pt={0.5}
                mb={2}
                noOfLines={1}
              >
                <Icon
                  as={<Ionicons name="star" />}
                  color="primary.500"
                  size={"xs"}
                />{" "}
                {item.rating} {remarks(item.rating)} (500+)
                <Icon
                  as={<Entypo name="dot-single" />}
                  // color="cool.500"
                  size={"xs"}
                />{" "}
                <Heading
                  color={"coolGray.500"}
                  fontWeight={"hairline"}
                  size={"xs"}
                  pt={0.5}
                  mb={2}
                >
                  {item.deliveryTime} min{" "}
                </Heading>
                <Icon
                  as={<Entypo name="dot-single" />}
                  // color="cool.500"
                  size={"xs"}
                />{" "}
                <Heading
                  color={"coolGray.500"}
                  fontWeight={"hairline"}
                  size={"xs"}
                  pt={0.5}
                  mb={2}
                >
                  Manchester
                </Heading>
              </Heading>
              <Heading
                fontWeight={"hairline"}
                size={"xs"}
                color={"coolGray.500"}
                pt={0.5}
              >
                0.4 miles away{" "}
                <Icon as={<Entypo name="dot-single" />} size={"xs"} /> $
                {item.deliveryFee} delivery fee
              </Heading>
            </Box>
            <Box
              height={"70"}
              padding={4}
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent={"space-between"}
            >
              <HStack space={4}>
                <Icon
                  as={<Ionicons name="md-information-circle-outline" />}
                  size={"lg"}
                  color={"coolGray.500"}
                />
                <VStack>
                  <Heading fontWeight={"hairline"} size={"sm"}>
                    Info
                  </Heading>
                  <Heading
                    fontWeight={"hairline"}
                    size={"xs"}
                    color={"coolGray.500"}
                  >
                    Map, allergens and hygiene rating
                  </Heading>
                </VStack>
              </HStack>
              <IconButton
                icon={
                  <Icon
                    as={Ionicons}
                    name="arrow-forward-outline"
                    color={"primary.500"}
                  />
                }
                borderRadius="full"
                variant={"subtle"}
                colorScheme="coolGray"
                size="sm"
              />
            </Box>
            <Box
              my={4}
              mx={4}
              backgroundColor={"rose.500"}
              height={"70"}
              borderRadius={5}
              padding={4}
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent={"space-around"}
            >
              <Icon
                as={<Ionicons name="basket-outline" />}
                color="white"
                size={"lg"}
              />
              <VStack space={1}>
                <Heading fontWeight={"bold"} size={"xs"} color={"white"}>
                  20% off entire menu
                </Heading>
                <Heading fontWeight={"hairline"} size={"xs"} color={"white"}>
                  For orders over $15. T & Cs apply
                </Heading>
              </VStack>
            </Box>
            <Divider mt={8} backgroundColor="white" />
            <Box backgroundColor={"coolGray.200"}>
              <Heading fontWeight={"bold"} size={"sm"} p={4} mt={4} mb={2}>
                Menu
              </Heading>
            </Box>
          </>
        }
        ListFooterComponent={<View pb={15} />}
        ItemSeparatorComponent={<View my={1} />}
        data={new Array(10)}
        renderItem={renderItem}
      />
    </Box>
  );
};

export default Brand;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flex: 1,
  },
});
