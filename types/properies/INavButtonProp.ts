import { GestureResponderEvent } from "react-native";

export default interface INavButtonProp {
  onPress: (event: GestureResponderEvent) => void;
  imageSource: string;
  selected: boolean;
}
