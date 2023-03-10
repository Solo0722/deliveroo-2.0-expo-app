import { Animated, StyleSheet, Text } from "react-native";
import React, { useRef, useEffect, useState, useContext } from "react";
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
  ScrollView,
  Button,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";
import BackButton from "../components/BackButton";
import { remarks } from "../constants/general";
import { GlobalContext } from "../context/context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Product = ({ navigation, route }) => {
  const { product, brand } = route.params;
  const [productCount, setProductCount] = useState(1);
  const [productTotalPrice, setProductTotalPrice] = useState(
    parseFloat(product.price)
  );
  const { userCart, setUserCart } = useContext(GlobalContext);

  const addProductToCart = async (item, itemCount) => {
    let cart = [];

    if (userCart.deliveryBrand) {
      if (brand.name === userCart.deliveryBrand?.name) {
        for (let i = 0; i < itemCount; i++) {
          cart.push(item);
        }
        let updatedProds = [...userCart.products, ...cart];
        let ct = { ...userCart, products: updatedProds };
        setUserCart({ ...userCart, products: updatedProds });
        await AsyncStorage.setItem("user-cart", JSON.stringify(ct));
      } else {
        for (let i = 0; i < itemCount; i++) {
          cart.push(item);
        }
        let ct = { deliveryBrand: brand, products: cart };
        setUserCart({ deliveryBrand: brand, products: cart });
        await AsyncStorage.setItem("user-cart", JSON.stringify(ct));
      }
    } else {
      for (let i = 0; i < itemCount; i++) {
        cart.push(item);
      }
      let ct = { deliveryBrand: brand, products: cart };
      setUserCart({ deliveryBrand: brand, products: cart });
      await AsyncStorage.setItem("user-cart", JSON.stringify(ct));
    }
    navigation.goBack();
  };

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
      headerTitle: product.name,
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

  const handleIncreaseProduct = () => {
    setProductCount(productCount + 1);

    let total = parseFloat(productTotalPrice) + parseFloat(product.price);
    setProductTotalPrice(total.toFixed(2));
  };
  const handleDecreaseProduct = () => {
    setProductCount(productCount - 1);

    let total = parseFloat(productTotalPrice) - parseFloat(product.price);
    setProductTotalPrice(total.toFixed(2));
  };

  return (
    <Animated.View flex={1}>
      <Animated.ScrollView
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
      >
        <Image
          source={{ uri: product.imageUrl }}
          alt="img"
          width={"100%"}
          height={200}
          resizeMethod="auto"
          resizeMode="cover"
        />
        <Box p={4}>
          <Box my={2}>
            <Heading fontWeight={"extrabold"} size={"lg"} mb={2}>
              {product.name}
            </Heading>
            <Heading
              fontWeight={"hairline"}
              size={"xs"}
              //   color={"coolGray.500"}
              mb={2}
              lineHeight={20}
            >
              {product.description}
            </Heading>
            <Heading
              fontWeight={"hairline"}
              size={"xs"}
              color={"primary.500"}
              pt={1}
              mb={2}
              noOfLines={1}
            >
              <Icon
                as={<Ionicons name="star" />}
                color="primary.500"
                size={"xs"}
              />{" "}
              {product.rating} ({remarks(product.rating)})
            </Heading>
          </Box>
          <Box
            borderTopWidth={1}
            borderBottomWidth={1}
            borderColor={"coolGray.200"}
            py={4}
            my={4}
          >
            <Heading
              fontWeight={"hairline"}
              size={"xs"}
              lineHeight={20}
              color={"coolGray.500"}
            >
              Questions about allergens, ingredients or cooking methods?{" "}
              <Heading
                fontWeight={"hairline"}
                size={"xs"}
                color={"primary.500"}
              >
                Please contact the restaurant
              </Heading>
            </Heading>
          </Box>
          <Box my={4}>
            <Heading fontWeight={"extrabold"} size={"sm"}>
              About {product.name}
            </Heading>
            <Heading
              fontWeight={"hairline"}
              size={"xs"}
              color="coolGray.500"
              mt={2}
              lineHeight={20}
            >
              You can add a theme.colors object to provide colors for your
              project. By default, these colors can be referenced by the color,
              borderColor, backgroundColor, etc. props. You can also add .alpha:
              number to add levels of opacity to a colour. The number can also
              be added in the theme file. Ex: red.300:alpha.30, You can read
              more about this in opacity section We recommend adding a palette
              that ranges from 50 to 900. Tools like JSON Color Palette
              Generator , Smart Swatch , or Palx are available to generate these
              palettes. You can add a theme.colors object to provide colors for
              your project. By default, these colors can be referenced by the
              color, borderColor, backgroundColor, etc. props. You can also add
              .alpha: number to add levels of opacity to a colour. The number
              can also be added in the theme file. Ex: red.300:alpha.30, You can
              read more about this in opacity section We recommend adding a
              palette that ranges from 50 to 900. Tools like JSON Color Palette
              Generator , Smart Swatch , or Palx are available to generate these
              palettes.
            </Heading>
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
      >
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          p={2}
          mb={2}
        >
          <HStack space={6}>
            <IconButton
              onPress={handleDecreaseProduct}
              isDisabled={productCount < 2}
              icon={
                <Icon
                  as={Ionicons}
                  name="md-remove-circle-outline"
                  color={"primary.500"}
                  //   size={"sm"}
                />
              }
              size={"lg"}
              borderRadius="full"
              variant={"subtle"}
              colorScheme="coolGray"
              _pressed={{
                backgroundColor: "coolGray.100",
              }}
              backgroundColor={"white"}
            />
            <Heading fontWeight={"extrabold"} size={"md"} mt={2}>
              {productCount}
            </Heading>
            <IconButton
              onPress={handleIncreaseProduct}
              icon={
                <Icon
                  as={Ionicons}
                  name="md-add-circle-outline"
                  color={"primary.500"}
                  //   size={"sm"}
                />
              }
              size={"lg"}
              borderRadius="full"
              variant={"subtle"}
              colorScheme="coolGray"
              _pressed={{
                backgroundColor: "coolGray.100",
              }}
              backgroundColor={"white"}
            />
          </HStack>
        </Box>
        <Button
          borderRadius={"0"}
          onPress={() => addProductToCart(product, productCount)}
        >
          <Heading fontWeight={"hairline"} size={"xs"} color="white">
            Add for ${productTotalPrice}
          </Heading>
        </Button>
      </Box>
    </Animated.View>
  );
};

export default Product;

const styles = StyleSheet.create({});
