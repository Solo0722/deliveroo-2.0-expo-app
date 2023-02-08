import {
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Box, Button, Fab, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import colors from "../constants/colors";
import { useState } from "react";
import * as Location from "expo-location";

const LocationPicker = () => {
  const [location, setLocation] = useState({
    latitude: 6.6919603,
    longitude: -1.550678,
    latitudeDelta: 0.5525864898612127,
    longitudeDelta: 0.7666236162185669,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
    })();
  }, []);
  console.log(location);

  return (
    <Box style={styles.container}>
      <Box style={styles.mapContainer}>
        <MapView
          // provider={Platform.OS === "android" ? "google" : null}
          style={styles.map}
          initialRegion={location}
          showsUserLocation={true}
          loadingEnabled={true}
          loadingIndicatorColor={`${colors.PRIMARY_COLOR}`}
          onRegionChangeComplete={(region) => {
            setLocation(region);
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={"My Location"}
            draggable
          />
        </MapView>
        {/* <Fab
          renderInPortal={false}
          shadow={2}
          bgColor={"white"}
          icon={
            <Icon
              color="primary.400"
              as={<Ionicons name="navigate-outline" />}
              size="md"
            />
          }
        /> */}
      </Box>
      <Box
        flex={0.1}
        bottom={0}
        variant={"solid"}
        p={5}
        bgColor={"white"}
        w={"full"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Button borderRadius={"0"} w="full">
          Confirm location
        </Button>
      </Box>
    </Box>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  mapContainer: {
    width: "100%",
    height: "100%",
    flex: 0.9,
  },
  map: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
});
