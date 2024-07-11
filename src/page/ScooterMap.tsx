import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { clearSelection } from "../redux/slices/scooterSlice";
import YandexMap from "../components/YandexMap";
import { View } from "react-native";
import { subtractionWallet } from "../redux/slices/walletSlice";

const ScooterMap = () => {
  const dispatch = useDispatch();
  const selectedScooter = useSelector(
    (state: RootState) => state.scooter.selectedScooter
  );
  const subscribe = useSelector((state: RootState) => state.subscribe);

  const [cost, setCost] = useState(subscribe.startPrice);

  useEffect(() => {
    dispatch(subtractionWallet(subscribe.startPrice));

    const interval = setInterval(() => {
      setCost((prev) => prev + subscribe.priceMinute);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const finishTrip = () => {
    dispatch(subtractionWallet(cost - subscribe.startPrice));
    dispatch(clearSelection());
  };

  return (
    <MapContainer>
      <YandexMap />
      <InfoContainer>
        {selectedScooter && (
          <>
            <InfoDataContainer>
              <View>
                <ScooterName>Самокат №{selectedScooter.name}</ScooterName>
                <InfoText>Скорость: 0 км/ч</InfoText>
                <InfoText>Растояние: 0 км</InfoText>
                <InfoText>Заряд: {selectedScooter.charge}%</InfoText>
              </View>
              <View>
                <Cost>{cost}₽</Cost>
              </View>
            </InfoDataContainer>
            <FinishTripButton onPress={finishTrip}>
              <ButtonText>Закончить поездку</ButtonText>
            </FinishTripButton>
          </>
        )}
      </InfoContainer>
    </MapContainer>
  );
};

//#region CSS

const MapContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`;

const InfoContainer = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;
`;

const InfoDataContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Cost = styled.Text`
  flex: 1;
  flex-direction: column;
  font-size: 32px;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const ScooterName = styled.Text`
  font-size: 18px;
  color: #333;
`;

const InfoText = styled.Text`
  font-size: 16px;
  color: #666;
  margin-top: 8px;
`;

const FinishTripButton = styled.TouchableOpacity`
  background-color: #ffa42d;
  padding: 10px 20px;
  border-radius: 5px;
  align-items: center;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;

//#endregion

export default ScooterMap;
