import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import { useDispatch } from "react-redux";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { setPage } from "../redux/slices/navigationSlice";

const Stats: React.FC = () => {
  const dispatch = useDispatch();
  const navigator = useNavigation();

  const onClose = () => {
    dispatch(setPage("profile"));
    navigator.dispatch(CommonActions.navigate({ name: "profile" }));
  };

  return (
    <Container>
      <Header>Ваша статистика</Header>
      <StatsMainContainer>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StatsContainer>
            <StatBox>
              <StatText>Ваша средняя{"\n"}скорость</StatText>
              <StatValue>16.2 км/ч</StatValue>
            </StatBox>
            <StatBox>
              <StatText>Вы проехали вместе{"\n"}с нами</StatText>
              <StatValue>62.9 км</StatValue>
            </StatBox>
          </StatsContainer>
        </ScrollView>
        {/* <CloseButton onPress={onClose}>
          <ButtonText>Вернуться</ButtonText>
        </CloseButton> */}
      </StatsMainContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: space-between;
`;
const Header = styled.Text`
  margin: 16px;
  font-size: 28px;
  color: black;
  font-weight: bold;
`;
const StatsMainContainer = styled.View`
  align-items: center;
  flex: 1;
  justify-content: space-between;
`;

const StatsContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StatBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  background-color: #e6e6e6;
  padding: 15px;
  border-radius: 10px;
  margin-top: 16px;
`;

const StatText = styled.Text`
  font-size: 24px;
  color: #000000;
  margin-bottom: 5px;
`;

const StatValue = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #ffa42d;
`;

const CloseButton = styled(TouchableOpacity)`
  background-color: #ffa42d;
  padding: 15px 30px;
  border-radius: 5px;
  margin: 20px 0;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;

export default Stats;
