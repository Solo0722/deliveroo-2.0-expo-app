import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, Skeleton, VStack } from "native-base";

const BannerSkeleton = () => {
  return (
    <HStack w="100%" height={260} space={8} rounded="md" p="4">
      <Skeleton flex="1" h="160" rounded="md" />
      <VStack flex="3" space="4">
        <Skeleton />
        <Skeleton.Text />
        <HStack space="2" alignItems="center">
          <Skeleton size="5" rounded="full" />
          <Skeleton h="3" flex="2" rounded="full" />
          <Skeleton h="3" flex="1" rounded="full" />
        </HStack>
      </VStack>
    </HStack>
  );
};

export default BannerSkeleton;

const styles = StyleSheet.create({});
