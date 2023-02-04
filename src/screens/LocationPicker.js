import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, Button, Fab, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const LocationPicker = () => {
  return (
    <Box style={styles.container}>
      <Box style={styles.mapContainer}>
        <Fab
          renderInPortal={false}
          shadow={2}
          marginBottom={24}
          bgColor={"white"}
          icon={
            <Icon
              color="primary.400"
              as={<Ionicons name="navigate-outline" />}
              size="md"
            />
          }
        />
      </Box>
      <Box
        position={"absolute"}
        bottom={0}
        variant={"solid"}
        p={5}
        bgColor={"white"}
        w={"full"}
      >
        <Button borderRadius={"0"}>Confirm location</Button>
      </Box>
    </Box>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  mapContainer: {
    width: "100%",
    height: "100%",
  },
});
