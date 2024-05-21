import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import styled from "styled-components/native";
import INavButtonProp from "../../types/properies/INavButtonProp";

const buttons: INavButtonProp[] = [
  {
    imageSource: require("../../assets/icons/navbar/Notifications.png"),
    onPress: () => {},
    selected: false,
  },
  {
    imageSource: require("../../assets/icons/navbar/History.png"),
    onPress: () => {},
    selected: false,
  },
  {
    imageSource: require("../../assets/icons/navbar/QR.png"),
    onPress: () => {},
    selected: false,
  },
  {
    imageSource: require("../../assets/icons/navbar/Scooter.png"),
    onPress: () => {},
    selected: false,
  },
  {
    imageSource: require("../../assets/icons/navbar/Profile.png"),
    onPress: () => {},
    selected: false,
  },
];

const Navbar: React.FC = () => {
  const handlePress = (buttonIndex: number) => {
    console.log(`Button ${buttonIndex} pressed`);
  };

  return (
    <NavbarContainer>
      {buttons.map((button, index) => (
        <NavButton key={index} onPress={() => handlePress(index + 1)}>
          <NavIcon source={button.imageSource} />
        </NavButton>
      ))}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  vertical-align: middle;
  height: auto;
  background-color: #ffa42d;
`;

const NavButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const NavIcon = styled.Image`
  width: 40px;
  height: 40px;
`;

export default Navbar;
