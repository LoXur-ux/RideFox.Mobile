import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Navbar from "./src/components/Navbar";
import { styled } from "styled-components/native";

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

  // UI
  return (
    <View>
      <Container>
        <View />
        <Navbar />
      </Container>
      <StatusBar style="auto" />
    </View>
  );
}
