import { Animated, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Link,
  Pressable,
  Toast,
  useToast,
  VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "../components/BackButton";
import { client } from "../helpers/sanity/sanityClient";

const GoogleAuth = ({ navigation }) => {
  const toast = useToast();
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const signUpValidation = () => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,4}");

    if (!formData.firstName) {
      return false;
    }
    if (!formData.lastName) {
      return false;
    }
    if (!formData.email) {
      return false;
    }
    if (regex.test(formData.email) === false) {
      return false;
    }
    if (!formData.password) {
      return false;
    }
    if (formData.password.length < 6) {
      return false;
    }

    return true;
  };
  const signInValidation = () => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,4}");

    if (!formData.email) {
      return false;
    }
    if (regex.test(formData.email) === false) {
      return false;
    }
    if (!formData.password) {
      return false;
    }

    return true;
  };

  const handleFormSubmit = () => {
    let validate = isSignUp ? signUpValidation() : signInValidation();
    if (validate) {
      setLoading(true);
      // if (isSignUp) {
      //   const doc = {
      //     _type: "user",
      //     ...formData,
      //   };

      //   client
      //     .createIfNotExists(doc)
      //     .then(() => {
      //       setLoading(false);
      //     })
      //     .catch((err) => console.log(err))
      //     .finally(() => navigation.goBack());
      // } else {
      // }
    } else {
      toast.show({
        description: "Invalid details! Try again",
        colorScheme: "error",
        bgColor: "error.500",
        variant: "subtle",
      });
      return;
    }
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

  return (
    <Animated.ScrollView
      style={styles.container}
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
      <Center bgColor={"primary.400"} width={"100%"} height={320} p={4}>
        <Image
          source={require("../assets/images/deliveroo.png")}
          alt="logo"
          width={50}
          height={50}
        />
        <Heading mt={8} mb={2} fontWeight={"bold"} size={"sm"} color={"white"}>
          Almost there!
        </Heading>
        <Heading
          my={2}
          w={"70%"}
          fontWeight={"hairline"}
          size={"xs"}
          color={"white"}
          textAlign="center"
        >
          You're one step away from delicious food being delivered to your door.
        </Heading>
        <Heading my={1} fontWeight={"bold"} size={"xs"} color={"white"}>
          It only takes a minute.
        </Heading>
      </Center>
      <Center p={4}>
        <VStack space={3} mt="5" w="full">
          {isSignUp && (
            <FormControl isRequired>
              <FormControl.Label>First name</FormControl.Label>
              <Input
                onChangeText={(e) => setFormData({ ...formData, firstName: e })}
              />
            </FormControl>
          )}
          {isSignUp && (
            <FormControl isRequired>
              <FormControl.Label>Last name</FormControl.Label>
              <Input
                onChangeText={(e) => setFormData({ ...formData, lastName: e })}
              />
            </FormControl>
          )}
          <FormControl isRequired>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              keyboardType="email-address"
              onChangeText={(e) => setFormData({ ...formData, email: e })}
            />
          </FormControl>
          {isSignUp && (
            <FormControl isRequired>
              <FormControl.Label>Phone number</FormControl.Label>
              <Input
                keyboardType="phone-pad"
                onChangeText={(e) =>
                  setFormData({ ...formData, phoneNumber: e })
                }
              />
            </FormControl>
          )}
          <FormControl isRequired>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={(e) => setFormData({ ...formData, password: e })}
            />
          </FormControl>
          <Button mt="2" onPress={handleFormSubmit} isLoading={loading}>
            {isSignUp ? "Sign up" : "Sign in"}
          </Button>
          <HStack mt="6" justifyContent="center">
            <Heading
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              {isSignUp ? "Already have an account? " : "New here? "}
            </Heading>
            <Link
              onPress={() => setIsSignUp(!isSignUp)}
              _text={{
                color: "primary.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </Link>
          </HStack>
        </VStack>
        <Heading
          mt={4}
          fontWeight={"thin"}
          size={"xs"}
          fontSize={12}
          textAlign="center"
          px={2}
        >
          By continuing, you agree to our T & Cs. Please also check out our
          Privacy Policy
        </Heading>
      </Center>
    </Animated.ScrollView>
  );
};

export default GoogleAuth;

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    // height: "100%",
  },
});
