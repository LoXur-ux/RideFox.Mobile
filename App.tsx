import { StatusBar } from "expo-status-bar";
import { styled } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import { View } from "react-native";
import store, { RootState } from "./redux/Store";
import Notifications from "./src/page/Notifications";
import History from "./src/page/History";
import QR from "./src/page/QR";
import Map from "./src/page/Map";
import Profile from "./src/page/Profile";
import Navbar from "./src/components/Navbar";
import NavigationApp from "./src/NavigationApp";

export default function App() {
  // TS Code

  // UI
  return (
    <Provider store={store}>
      <NavigationApp />
      <StatusBar style="auto" />
    </Provider>
  );
}
