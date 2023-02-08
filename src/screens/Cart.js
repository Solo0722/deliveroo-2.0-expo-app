import { Animated, StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../components/BackButton";
import { useEffect } from "react";
import {
  IconButton,
  Icon,
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Pressable,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

const fees = [
  { title: "Subtotal", fee: 7.99 },
  { title: "Delivery fee", fee: 2.99 },
  { title: "Service fee", fee: 1.99 },
];

const Cart = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "My Basket",
      headerTitleStyle: {
        fontSize: 16,
        fontFamily: "inter-semibold",
      },
      headerLeft: () => <BackButton />,
      headerLeftContainerStyle: {
        paddingLeft: 10,
      },
      headerRightContainerStyle: {
        paddingRight: 10,
      },
      headerRight: () => (
        <IconButton
          icon={
            <Icon
              as={Ionicons}
              name="trash-outline"
              color={"primary.500"}
              //   size={"sm"}
            />
          }
          size={"md"}
          borderRadius="full"
          variant={"subtle"}
          colorScheme="coolGray"
          _pressed={{
            backgroundColor: "coolGray.100",
          }}
          backgroundColor={"white"}
        />
      ),
    });
  }, [navigation]);

  return (
    <Animated.View flex={1}>
      <Animated.ScrollView
        overScrollMode={"never"}
        showsVerticalScrollIndicator={false}
      >
        <Box py={4}>
          <Heading fontWeight={"extrabold"} size={"sm"} fontSize={15} p={4}>
            Delivery from Don Tacos
          </Heading>
          <Box
            borderTopWidth={1}
            borderBottomWidth={1}
            borderColor={"coolGray.200"}
            display={"flex"}
            flexDirection={"row"}
            alignItems="center"
            justifyContent={"space-between"}
            p={4}
            bgColor={"white"}
          >
            <HStack
              space={2}
              display={"flex"}
              flexDirection={"row"}
              alignItems="center"
              justifyContent={"space-between"}
            >
              <Image
                source={require("../assets/images/bike.png")}
                alt="bike"
                width={"10"}
                height={"10"}
                borderRadius="full"
              />
              <Heading fontWeight={"hairline"} size={"sm"} fontSize={15}>
                Deliver in 20 - 30 min
              </Heading>
            </HStack>
            <Button variant={"ghost"}>Change</Button>
          </Box>
          <Heading
            fontWeight={"extrabold"}
            size={"sm"}
            fontSize={15}
            mt={4}
            p={4}
          >
            Items
          </Heading>
          <Box
            borderTopWidth={1}
            borderBottomWidth={1}
            borderColor={"coolGray.200"}
            display={"flex"}
            flexDirection={"column"}
            bgColor={"white"}
          >
            {[1, 2, 3, 4, 5].map((item, i) => (
              <Pressable key={i} android_ripple={{ color: "#e5e7eb" }}>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems="center"
                  justifyContent={"space-between"}
                  w={"full"}
                  p={4}
                >
                  <Heading
                    color={"primary.500"}
                    fontWeight={"hairline"}
                    size={"xs"}
                  >
                    1x
                  </Heading>
                  <Heading fontWeight={"hairline"} size={"xs"}>
                    Spicy Chipotle Wings
                  </Heading>
                  <Heading fontWeight={"hairline"} size={"xs"}>
                    $3.99
                  </Heading>
                </Box>
              </Pressable>
            ))}
          </Box>
          <Heading
            fontWeight={"extrabold"}
            size={"sm"}
            fontSize={15}
            mt={4}
            p={4}
          >
            Fees
          </Heading>
          <Box
            borderTopWidth={1}
            borderBottomWidth={1}
            borderColor={"coolGray.200"}
            display={"flex"}
            flexDirection={"column"}
            bgColor={"white"}
          >
            {fees.map((item, i) => (
              <Pressable key={i} android_ripple={{ color: "#e5e7eb" }}>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems="center"
                  justifyContent={"space-between"}
                  w={"full"}
                  p={4}
                >
                  <Heading fontWeight={"hairline"} size={"xs"}>
                    {item.title}
                  </Heading>
                  <Heading fontWeight={"hairline"} size={"xs"}>
                    ${item.fee}
                  </Heading>
                </Box>
              </Pressable>
            ))}
          </Box>
        </Box>
      </Animated.ScrollView>
      <Box
        bottom={0}
        marginTop="auto"
        variant={"solid"}
        p={5}
        bgColor={"white"}
        w={"full"}
        shadow={4}
      >
        <Box
          my={4}
          display={"flex"}
          flexDirection={"row"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Heading fontWeight={"hairline"} size={"sm"}>
            Total
          </Heading>
          <Heading fontWeight={"extrabold"} size={"sm"}>
            $12.99
          </Heading>
        </Box>
        <Button borderRadius={"0"}>Go to checkout</Button>
      </Box>
    </Animated.View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
