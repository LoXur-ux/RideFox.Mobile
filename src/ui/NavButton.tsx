import React, { FC } from "react";
import {
  Image,
  GestureResponderEvent,
  TouchableHighlight,
  View,
} from "react-native";

import { styled } from "styled-components/native";
import { Theme } from "./../Theme";

interface INavButtonProp {
  onPress: (event: GestureResponderEvent) => void;
  imageSource: string;
  selected: boolean;
}

const NavButtonView = styled.View`
  width: 100%;
  height: 100%;
`;

const NavButton: FC<INavButtonProp> = (props) => {
  return (
    <NavButtonView>
      <TouchableHighlight onPress={props.onPress}>
        <View>
          <Image source={{ uri: props.imageSource }}></Image>
        </View>
      </TouchableHighlight>
    </NavButtonView>
  );
};

export default NavButton;
