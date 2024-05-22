import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { CommonActions, useNavigation } from "@react-navigation/native";

const Map: React.FC = () => {
  var currentPage = useSelector(
    (state: RootState) => state.navigation.currentPage
  );
  const navigator = useNavigation();
  navigator.dispatch(CommonActions.navigate({ name: currentPage }));
  return (
    <View>
      <Text>Map</Text>
    </View>
  );
};

export default Map;
