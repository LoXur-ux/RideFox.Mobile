import React from "react";
import styled from "styled-components/native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/Store";
import IUserModel from "../../types/model/IUserModel";
import { logoutUser } from "../../redux/slices/userSlice";
import Logo from "../components/Logo";

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

const InfoText = styled.Text`
  font-size: 18px;
  color: #2e2e2e;
  margin-bottom: 10px;
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
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(
    (state: RootState) => state.user.currentUser
  ) as IUserModel;
  const trips = useSelector((state: RootState) => state.trips.trips);

  const totalDistance = trips.reduce((sum, trip) => sum + trip.distance, 0);
  const totalTime = trips.reduce((sum, trip) => sum + trip.duration, 0);
  const averageSpeed =
    totalDistance > 0 && totalTime > 0 ? totalDistance / (totalTime / 60) : 0;

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Container>
      <Logo />
      <WelcomeText>Привет, {user.firstName}</WelcomeText>
      <InfoText>Общее расстояние: {totalDistance.toFixed(2)} км</InfoText>
      <InfoText>Средняя скорость: {averageSpeed.toFixed(2)} км/ч</InfoText>
      <InfoText>Общее время в пути: {(totalTime / 60).toFixed(2)} ч</InfoText>
      <Button onPress={handleLogout}>
        <ButtonText>Выйти</ButtonText>
      </Button>
    </Container>
  );
};

export default UserProfile;
