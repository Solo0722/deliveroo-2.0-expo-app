import { StyleSheet, Text } from "react-native";
import React from "react";
import { Icon, Input, View } from "native-base";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { MAINSEARCH } from "../constants/routeNames";
import { useNavigation } from "@react-navigation/native";

const Searchbar = () => {
  const { navigate } = useNavigation();
  return (
    <View w={"85%"}>
      <Input
        onTouchEnd={() => navigate(MAINSEARCH)}
        InputLeftElement={
          <Icon
            as={<Ionicons name="search-outline" />}
            // size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Restaurants, groceries, dishes"
        type="text"
        variant={"filled"}
        bg={`${colors.BODY}`}
        borderWidth={0}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({});
