import { Animated, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import {
  IconButton,
  Icon,
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Pressable,
  Checkbox,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { client } from "../helpers/sanity/sanityClient";

const payments = [
  {
    title: "Apple Pay",
    img: "https://developer.apple.com/news/images/og/apple-pay-og.jpg",
  },
  {
    title: "PayPal",
    img: "https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png",
  },
  {
    title: "Klarna",
    img: "https://www.coi-firenze.it/wp-content/uploads/2022/05/pf-527877b4-KLarna-banner-scaled.jpg",
  },
  {
    title: "MTN Mobile money",
    img: "https://citinewsroom.com/wp-content/uploads/2020/03/MTN-Momo-e1584721116128.jpeg",
  },
  {
    title: "Vodafone cash",
    img: "https://www.ghanamix.com/wp-content/uploads/2017/03/vodafone-cash.png",
  },
  {
    title: "AirtelTigo cash",
    img: "https://pcbossonline.com/wp-content/uploads/2020/04/airteltigo-money-logo.webp",
  },
];

const Checkout = ({ navigation }) => {
  const { userCart, user, userLocation } = useContext(GlobalContext);
  const [loading, setLoading] = useState();

  const createCheckoutToken = () => {
    setLoading(true);
    const doc = {
      _type: "checkout",
      checkoutCart: userCart,
      paymentMethod: "",
      ownerLocation: userLocation,
      owner: {
        _type: "user",
        _ref: user._id,
      },
    };

    client
      .createOrReplace(doc)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => navigation.navigate());
  };

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
          </Box>
          <Heading
            fontWeight={"extrabold"}
            size={"sm"}
            fontSize={15}
            mt={4}
            p={4}
          >
            Payments
          </Heading>
          <Box
            borderTopWidth={1}
            borderBottomWidth={1}
            borderColor={"coolGray.200"}
            display={"flex"}
            flexDirection={"column"}
            bgColor={"white"}
          >
            {payments.map((item, i) => (
              <Pressable key={i} android_ripple={{ color: "#e5e7eb" }}>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems="center"
                  justifyContent={"space-between"}
                  textAlign="left"
                  w={"full"}
                  py={2}
                  px={4}
                >
                  <HStack
                    space={4}
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems="center"
                    justifyContent={"space-between"}
                  >
                    <Image
                      source={{ uri: item.img }}
                      resizeMode="contain"
                      resizeMethod="auto"
                      width={10}
                      height={10}
                      alt={"payment-img"}
                    />
                    <Heading fontWeight={"hairline"} size={"xs"}>
                      {item.title}
                    </Heading>
                  </HStack>
                  <IconButton
                    icon={
                      <Icon
                        as={Ionicons}
                        name="chevron-forward-outline"
                        color={"primary.500"}
                      />
                    }
                    variant={"subtle"}
                    backgroundColor={"white"}
                  />
                </Box>
              </Pressable>
            ))}
          </Box>
          <Box
            borderTopWidth={1}
            borderBottomWidth={1}
            borderColor={"coolGray.200"}
            display={"flex"}
            flexDirection={"row"}
            alignItems="center"
            justifyContent={"space-between"}
            p={4}
            mt={8}
            bgColor={"white"}
          >
            <Heading
              fontWeight={"hairline"}
              size={"xs"}
              w={"85%"}
              color={"coolGray.500"}
            >
              Tick this box if you would like to receive Deliveroo marketing
              offers and promotions via email. You can opt out at any time, and
              we promise never to sell out your details to other businesses.
            </Heading>
            <Checkbox accessibilityLabel="email checkbox" />
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
        <Button borderRadius={"0"} isLoading={loading}>
          Pay
        </Button>
      </Box>
    </Animated.View>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
