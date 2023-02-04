import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Icon,
  Image,
  Pressable,
  VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

const GoogleAuth = () => {
  return (
    <Box flex={1} style={styles.container}>
      <Center flex={0.5} bgColor={"primary.400"} width={"100%"} height={"50%"}>
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
          w={"60%"}
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
      <Center p={5} flex={0.5}>
        <VStack space={4} w="full">
          <Button
            variant="subtle"
            shadow={1}
            endIcon={
              <Icon
                as={Ionicons}
                name="logo-google"
                color="primary.400"
                size="sm"
                ml={"90"}
              />
            }
            w="full"
            flexDirection="row"
            colorScheme={"coolGray"}
          >
            Continue with Google
          </Button>
          <Button
            variant="subtle"
            shadow={1}
            endIcon={
              <Icon
                as={Ionicons}
                name="logo-facebook"
                color="primary.400"
                size="sm"
                ml={"90"}
              />
            }
            w="full"
            colorScheme={"coolGray"}
          >
            Continue with Facebook
          </Button>
        </VStack>
        <HStack alignItems={"center"} my={6}>
          <Heading fontWeight={"thin"} size={"xs"}>
            or
          </Heading>
        </HStack>
        <Button variant={"ghost"}>Continue with email</Button>

        <Heading
          mt={4}
          fontWeight={"thin"}
          size={"xs"}
          fontSize={12}
          textAlign="center"
          px={2}
          bottom={"-50"}
        >
          By continuing, you agree to our T & Cs. Please also check out our
          Privacy Policy
        </Heading>
      </Center>
    </Box>
  );
};

export default GoogleAuth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
