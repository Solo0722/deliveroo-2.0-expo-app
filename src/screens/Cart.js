import { Animated, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
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
  Actionsheet,
  useDisclose,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { GlobalContext } from "../context/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CHECKOUT, GOOGLEAUTH } from "../constants/routeNames";

const Cart = ({ navigation }) => {
  const { userCart, setUserCart, user } = useContext(GlobalContext);
  let subTotal = parseFloat(0);
  const { isOpen, onOpen, onClose } = useDisclose();

  userCart.products.forEach((prod) => {
    subTotal = subTotal + parseFloat(prod.price);
  });

  const fees = [
    { title: "Subtotal", fee: subTotal.toFixed(2) },
    { title: "Delivery fee", fee: userCart.deliveryBrand.deliveryFee },
    { title: "Service fee", fee: 1.99 },
  ];

  const emptyAllProductsFromCart = async () => {
    navigation.goBack();
    let emptyCart = {
      deliveryBrand: null,
      products: [],
    };
    setUserCart(emptyCart);
    await AsyncStorage.setItem("user-cart", JSON.stringify(emptyCart));
  };

  const removeItemFromCart = async (prod) => {
    let updatedProducts = userCart.products.filter(
      (product) => product.id !== prod.id
    );
    let updatedCart = { ...userCart, products: updatedProducts };
    setUserCart(updatedCart);
    await AsyncStorage.setItem("user-cart", JSON.stringify(updatedCart));

    if (updatedProducts.length === 0) {
      navigation.goBack();
    }
  };

  const goToCheckout = () => {
    if (user) {
      navigation.navigate(CHECKOUT);
    } else {
      navigation.navigate(GOOGLEAUTH);
    }
  };

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
          onPress={emptyAllProductsFromCart}
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
            Delivery from {userCart.deliveryBrand.name}
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
                Deliver in {userCart.deliveryBrand.deliveryTime} min
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
            {userCart.products.map((item, i) => (
              <Pressable
                key={i}
                android_ripple={{ color: "#e5e7eb" }}
                onPress={onOpen}
              >
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
                    {item.name}
                  </Heading>
                  <Heading fontWeight={"hairline"} size={"xs"}>
                    ${item.price}
                  </Heading>
                </Box>
                <Actionsheet isOpen={isOpen} onClose={onClose} borderRadius={0}>
                  <Actionsheet.Content>
                    <Box w="100%" p={4} justifyContent="center">
                      <Button
                        borderRadius={"0"}
                        colorScheme={"danger"}
                        onPress={() => {
                          onClose();
                          removeItemFromCart(item);
                        }}
                      >
                        <Heading
                          fontWeight={"hairline"}
                          size={"xs"}
                          color="white"
                        >
                          Remove {item.name}
                        </Heading>
                      </Button>
                    </Box>
                  </Actionsheet.Content>
                </Actionsheet>
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
            $
            {(
              subTotal +
              parseFloat(1.99) +
              parseFloat(userCart.deliveryBrand.deliveryFee)
            ).toFixed(2)}
          </Heading>
        </Box>
        <Button borderRadius={"0"} onPress={goToCheckout}>
          Go to checkout
        </Button>
      </Box>
    </Animated.View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
