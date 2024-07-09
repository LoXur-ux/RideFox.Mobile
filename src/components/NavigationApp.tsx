import React from "react";
import styled from "styled-components/native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navbar from "./Navbar";
import Profile from "../page/Profile";
import Notifications from "../page/Notifications";
import QRScanner from "../page/QRScanner";
import Scooter from "../page/Scooter";
import History from "../page/History";
import ScooterMap from "../page/ScooterMap";
import Login from "../page/Login";
import Registration from "../page/Registration";
import { View } from "react-native";
import Stats from "../page/Stats";

const Stack = createNativeStackNavigator();

const NavigationApp: React.FC = () => {
  const selectedScooter = useSelector(
    (state: RootState) => state.scooter.selectedScooter
  );

  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  const currentPage = useSelector(
    (state: RootState) => state.navigation.currentPage
  );

  return (
    <Container>
      <NavigationContainer>
        {currentUser ? (
          <Stack.Navigator initialRouteName={currentPage}>
            <Stack.Screen
              options={{ headerShown: false }}
              name="notification"
              component={Notifications}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="history"
              component={History}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="qr"
              component={QRScanner}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="map"
              component={selectedScooter ? ScooterMap : Scooter}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="profile"
              component={Profile}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="stats"
              component={Stats}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="login"
              component={Login}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="registration"
              component={Registration}
            />
          </Stack.Navigator>
        )}
        {currentUser ? <Navbar /> : <View />}
      </NavigationContainer>
    </Container>
  );
};

// CSS
const Container = styled.View`
  height: 100%;
  width: 100%;
  padding-top: 9%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
`;

export default NavigationApp;
