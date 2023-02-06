import { StyleSheet, Text } from "react-native";
import React from "react";
import {
  FlatList,
  Heading,
  Pressable,
  ScrollView,
  View,
  VStack,
} from "native-base";
import FeaturedRowCard from "../components/FeaturedRowCard";
import CardSkeleton from "../components/CardSkeleton";

const FeaturedRow = ({ orientation, heading, subHeading, data }) => {
  return (
    <>
      <VStack space={2} mt={8} mb={4} px={15}>
        {heading && (
          <Heading fontWeight={"bold"} size={"sm"}>
            {heading}
          </Heading>
        )}
        {subHeading && (
          <Heading fontWeight={"hairline"} size={"xs"} color={"coolGray.500"}>
            {subHeading}
          </Heading>
        )}
      </VStack>
      <FlatList
        ListHeaderComponent={
          <View
            pl={orientation == "vertical" ? 0 : 15}
            pt={orientation == "vertical" ? 15 : 0}
          />
        }
        ListFooterComponent={
          <View
            pr={orientation == "vertical" ? 0 : 15}
            pt={orientation == "vertical" ? 15 : 0}
          />
        }
        ItemSeparatorComponent={
          <View
            mx={orientation == "vertical" ? 0 : 7.5}
            my={orientation == "vertical" ? 7.5 : 0}
          />
        }
        horizontal={orientation === "vertical" ? false : true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={data || []}
        renderItem={({ item }) => <FeaturedRowCard item={item} />}
        estimatedItemSize={data.length || 15}
        overScrollMode="never"
      />
    </>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginVertical: 10,
  },
});
