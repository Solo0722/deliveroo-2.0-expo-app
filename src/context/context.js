import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState({
    latitude: 6.6919603,
    longitude: -1.550678,
    latitudeDelta: 0.5525864898612127,
    longitudeDelta: 0.7666236162185669,
  });
  const [user, setUser] = useState(null);
  const [userCart, setUserCart] = useState({
    deliveryBrand: null,
    products: [],
  });

  return (
    <GlobalContext.Provider
      value={{
        userLocation,
        setUserLocation,
        userCart,
        setUserCart,
        user,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

const styles = StyleSheet.create({});
