import { StyleSheet } from "react-native";
import React, { useEffect, useContext } from "react";
import { Box, Button } from "native-base";
import MapView, { Marker } from "react-native-maps";
import colors from "../constants/colors";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalContext } from "../context/context";

const LocationPicker = ({ navigation }) => {
  const { userLocation, setUserLocation } = useContext(GlobalContext);

  const getUserLocationFromStorage = async () => {
    const jsonData = await AsyncStorage.getItem("user-location");
    if (jsonData !== null) {
      const data = JSON.parse(jsonData);
      setUserLocation(data);
    }
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return;
    }

    let { coords } = await Location.getCurrentPositionAsync({});
    setUserLocation(coords);
    await AsyncStorage.setItem("user-location", JSON.stringify(coords));
  };

  useEffect(() => {
    getUserLocationFromStorage();
    if (userLocation === null) {
      getLocation();
    }
  }, []);

  return (
    <Box style={styles.container}>
      <Box style={styles.mapContainer}>
        <MapView
          // provider={Platform.OS === "android" ? "google" : null}
          style={styles.map}
          initialRegion={userLocation}
          showsUserLocation={true}
          loadingEnabled={true}
          loadingIndicatorColor={`${colors.PRIMARY_COLOR}`}
          onRegionChangeComplete={async (region) => {
            setUserLocation(region);
            await AsyncStorage.setItem("user-location", JSON.stringify(region));
          }}
        >
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title={"My Location"}
            draggable
          />
        </MapView>
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
        <Button borderRadius={"0"} w="full" onPress={() => navigation.goBack()}>
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
