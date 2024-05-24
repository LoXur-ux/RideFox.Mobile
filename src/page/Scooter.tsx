import React, { useEffect, useState } from "react";
import axios from "axios";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { useDispatch } from "react-redux";
import IScooterModel from "../../types/model/IScooterModel";
import ScooterStatus from "../../types/enum/ScooterStatuses";
import ScooterModal from "../components/ScooterModal";
import { selectScooter } from "../../redux/slices/scooterSlice";
import serverURI from "./../../settings.json";

const scootersDef: IScooterModel[] = [
  { id: "1", name: "Scooter 1", charge: 80, status: ScooterStatus.Free },
  { id: "2", name: "Scooter 2", charge: 50, status: ScooterStatus.Rented },
  { id: "3", name: "Scooter 3", charge: 30, status: ScooterStatus.Free },
  // добавьте больше самокатов по необходимости
];

const Scooter: React.FC = () => {
  const dispatch = useDispatch();
  const [scooters, setScooter] = useState<IScooterModel[]>([]);
  useEffect(() => {
    axios
      .get<IScooterModel[]>(serverURI + "scooter/get-all")
      .then((res) => {
        setScooter((prev) => (prev = res.data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        if (scooters.length === 0) setScooter(scootersDef);
      });
    return () => {};
  }, []);

  const openModal = (scooter: IScooterModel) => {
    dispatch(selectScooter(scooter));
  };

  const freeScooters = scooters.filter(
    (scooter) => scooter.status === ScooterStatus.Free
  );

  return (
    <Container>
      <FlatList
        data={freeScooters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ScooterItem onPress={() => openModal(item)}>
            <ScooterName>{item.name}</ScooterName>
            <ScooterStatusText>{item.status}</ScooterStatusText>
          </ScooterItem>
        )}
      />
      <ScooterModal />
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
