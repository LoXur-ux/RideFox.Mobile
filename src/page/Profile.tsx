import React from "react";
import styled from "styled-components/native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/Store";
import IUserModel from "../types/model/IUserModel";
import { logoutUser } from "../redux/slices/userSlice";
import { CommonActions, useNavigation } from "@react-navigation/native";
import Logo from "../components/Logo";
import { setPage } from "../redux/slices/navigationSlice";

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.currentUser);
  const trips = useSelector((state: RootState) => state.trips.trips);
  const wallet = useSelector((state: RootState) => state.wallet);
  const navigator = useNavigation();
  const totalDistance = trips.reduce((sum, trip) => sum + trip.distance, 0);
  const totalTime = trips.reduce((sum, trip) => sum + trip.duration, 0);
  const averageSpeed =
    totalDistance > 0 && totalTime > 0 ? totalDistance / (totalTime / 60) : 0;

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleStats = () => {
    dispatch(setPage("stats"));
    navigator.dispatch(CommonActions.navigate({ name: "stats" }));
  };
  const handleSubscribe = () => {
    dispatch(setPage("subscibe"));
    navigator.dispatch(CommonActions.navigate({ name: "subscibe" }));
  };

  const handleChangeUserInfo = () => {
    dispatch(setPage("updateUser"));
    navigator.dispatch(CommonActions.navigate({ name: "updateUser" }));
  };

  return (
    <Container>
      <Logo />
      <WelcomeText>Привет, {user.firstName}</WelcomeText>
      <Button onPress={() => {}}>
        <ButtonText>Кошелек: {wallet.amount}₽</ButtonText>
      </Button>
      <Button onPress={handleStats}>
        <ButtonText>Статистика</ButtonText>
      </Button>
      <Button onPress={handleChangeUserInfo}>
        <ButtonText>Изменить свои данные</ButtonText>
      </Button>
      <Button onPress={handleSubscribe}>
        <ButtonText>Изменить подписку</ButtonText>
      </Button>
      <StatButton onPress={handleLogout}>
        <StatButtonText>Выйти из аккаунта</StatButtonText>
      </StatButton>
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding-top: 50px;
`;

const WelcomeText = styled.Text`
  font-size: 24px;
  color: #2e2e2e;
  margin-bottom: 20px;
`;

const Button = styled.TouchableOpacity`
  background-color: #ffa42d;
  width: 80%;
  height: 50px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

const StatButton = styled.TouchableOpacity`
  background-color: #f9f9f9;
  width: 80%;
  height: 50px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const StatButtonText = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;

export default UserProfile;
