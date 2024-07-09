import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { selectScooter } from "../redux/slices/scooterSlice";
import ScooterStatus from "../types/enum/ScooterStatuses";
import IScooterModel from "../types/model/IScooterModel";
import scootersData from "../types/data/Scooters";

const Scooter: React.FC = () => {
  const dispatch = useDispatch();
  const [scooters, setScooter] = useState<IScooterModel[]>([]);

  useEffect(() => {
    setScooter(scootersData);
  }, []);

  const openModal = (scooter: IScooterModel) => {
    dispatch(selectScooter(scooter));
  };

  return (
    <Container>
      <FlatList
        data={scooters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ScooterItem onPress={() => openModal(item)}>
            <ScooterName>{item.name}</ScooterName>
            <ScooterStatusText>{ScooterStatus[item.status]}</ScooterStatusText>
          </ScooterItem>
        )}
      />
    </Container>
  );
};

export default Scooter;

//#region CSS
const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #f8f9fa;
`;

const ScooterItem = styled.TouchableOpacity`
  background-color: #ffa42d;
  padding: 15px;
  margin-bottom: 10px;
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

const ScooterStatusText = styled.Text`
  font-size: 14px;
  color: #666;
`;

//#endregion
