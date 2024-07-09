import React from "react";
import styled from "styled-components/native";
import INavButtonProp from "../types/properties/INavButtonProp";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/slices/navigationSlice";
import { CommonActions, useNavigation } from "@react-navigation/native";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigator = useNavigation();

  const buttons: INavButtonProp[] = [
    {
      imageSource: require("../assets/icons/navbar/Notifications.png"),
      onPress: () => {
        dispatch(setPage("notification"));
        navigator.dispatch(CommonActions.navigate({ name: "notification" }));
      },
      selected: false,
    },
    {
      imageSource: require("../assets/icons/navbar/History.png"),
      onPress: () => {
        dispatch(setPage("history"));
        navigator.dispatch(CommonActions.navigate({ name: "history" }));
      },
      selected: false,
    },
    {
      imageSource: require("../assets/icons/navbar/QR.png"),
      onPress: () => {
        dispatch(setPage("qr"));
        navigator.dispatch(CommonActions.navigate({ name: "qr" }));
      },
      selected: false,
    },
    {
      imageSource: require("../assets/icons/navbar/Scooter.png"),
      onPress: () => {
        dispatch(setPage("map"));
        navigator.dispatch(CommonActions.navigate({ name: "map" }));
      },
      selected: false,
    },
    {
      imageSource: require("../assets/icons/navbar/Profile.png"),
      onPress: () => {
        dispatch(setPage("profile"));
        navigator.dispatch(CommonActions.navigate({ name: "profile" }));
      },
      selected: false,
    },
  ];

  return (
    <NavbarContainer>
      {buttons.map((button, index) => (
        <NavButton key={index} onPress={button.onPress}>
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
