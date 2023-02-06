import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { VStack, Skeleton } from "native-base";

const FoodCategorySkeleton = () => {
  return (
    <VStack w={70} h={70} rounded="md">
      <Skeleton />
    </VStack>
  );
};

export default FoodCategorySkeleton;

const styles = StyleSheet.create({});
