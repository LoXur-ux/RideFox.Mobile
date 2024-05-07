import React, { useState } from "react";
import { View } from "react-native";
import NavButton from "../ui/NavButton";
import styled from "styled-components/native";

const NavbarView = styled.View`
  display: flex;
  width: 10%;
`;

const Navbar = () => {
  return (
    <NavbarView>
      <NavButton imageSource="" onPress={() => {}} selected />
      <NavButton imageSource="" onPress={() => {}} selected />
      <NavButton imageSource="" onPress={() => {}} selected />
      <NavButton imageSource="" onPress={() => {}} selected />
      <NavButton imageSource="" onPress={() => {}} selected />
    </NavbarView>
  );
};

export default Navbar;
