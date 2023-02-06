import { StyleSheet, Text } from "react-native";
import React from "react";
import { VStack, Skeleton, Heading, FlatList, View } from "native-base";

const CardSkeleton = ({ orientation }) => {
  return (
    <>
      <FlatList
        style={{ height: 300 }}
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
        data={new Array(10)}
        renderItem={({ item }) => (
          <VStack w={260} h={260} space={8} overflow="hidden" rounded="md">
            <Skeleton h="40" />
            <Skeleton.Text px="4" />
            <Skeleton px="4" my="4" rounded="md" />
          </VStack>
        )}
        estimatedItemSize={15}
        overScrollMode="never"
      />
    </>
  );
};

export default CardSkeleton;

const styles = StyleSheet.create({});
