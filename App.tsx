import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Navbar from "./src/components/Navbar";
import { styled } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notifications from "./src/page/Notifications";
import History from "./src/page/History";
import QR from "./src/page/QR";
import Map from "./src/page/Map";
import { Profiler } from "react";

// CSS
const Container = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
`;

export default function App() {
  // TS Code
  const Stack = createNativeStackNavigator();

  // UI
  return (
    <NavigationContainer>
      <Container>
        <Stack.Navigator initialRouteName="map">
          <Stack.Screen name="notification" component={Notifications} />
          <Stack.Screen name="history" component={History} />
          <Stack.Screen name="qr" component={QR} />
          <Stack.Screen name="map" component={Map} />
          <Stack.Screen name="profile" component={Profiler} />
        </Stack.Navigator>
        <Navbar />
      </Container>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
