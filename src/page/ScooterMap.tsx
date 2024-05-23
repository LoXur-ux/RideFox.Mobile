import React from "react";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { clearSelection } from "../../redux/slices/scooterSlice";

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

const ScooterName = styled.Text`
  font-size: 18px;
  color: #333;
`;

const SpeedText = styled.Text`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
`;

const FinishTripButton = styled.TouchableOpacity`
  background-color: #ffa42d;
  padding: 10px 20px;
  border-radius: 5px;
  align-items: center;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: #f9f9f9;
  font-size: 16px;
`;

const ScooterMap = () => {
  const dispatch = useDispatch();
  const selectedScooter = useSelector(
    (state: RootState) => state.scooter.selectedScooter
  );

  const finishTrip = () => {
    dispatch(clearSelection());
  };

  return (
    <MapContainer>
      {/* Заглушка для карты */}
      <InfoContainer>
        {selectedScooter && (
          <>
            <ScooterName>{selectedScooter.name}</ScooterName>
            <SpeedText>Скорость: 0 км/ч</SpeedText>
            <FinishTripButton onPress={finishTrip}>
              <ButtonText>Закончить поездку</ButtonText>
            </FinishTripButton>
          </>
        )}
      </InfoContainer>
    </MapContainer>
  );
};

export default ScooterMap;
