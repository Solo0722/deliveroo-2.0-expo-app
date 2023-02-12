import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Button } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HOME } from "../constants/routeNames";
import { GlobalContext } from "../context/context";

const Settings = ({ navigation }) => {
  const { setUser } = useContext(GlobalContext);

  const handleLogout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("user");
    navigation.navigate(HOME);
  };

  return (
    <View>
      <Button onPress={handleLogout}>Log out</Button>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
