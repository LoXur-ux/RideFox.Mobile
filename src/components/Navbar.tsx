import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import styled from "styled-components/native";

const icons = [
  require("../../assets/icons/navbar/Notifications.png"),
  require("../../assets/icons/navbar/History.png"),
  require("../../assets/icons/navbar/QR.png"),
  require("../../assets/icons/navbar/Scooter.png"),
  require("../../assets/icons/navbar/Profile.png"),
];

const Navbar: React.FC = () => {
  const handlePress = (buttonIndex: number) => {
    console.log(`Button ${buttonIndex} pressed`);
  };

  return (
    <NavbarContainer>
      {icons.map((icon, index) => (
        <NavButton key={index} onPress={() => handlePress(index + 1)}>
          <NavIcon source={icon} />
        </NavButton>
      ))}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: #333;
`;

const NavButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const NavIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

export default Navbar;
