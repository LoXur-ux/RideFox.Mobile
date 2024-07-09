import React, { useEffect, useState } from "react";
import { Text, FlatList } from "react-native";
import styled from "styled-components/native";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import HistoryModal from "./../components/HistoryModal";
import tripsData from "../types/data/Trips";

interface IHistCardProps {
  history: IHistoryModel;
  onPress: () => void;
}

const HistCard: React.FC<IHistCardProps> = (props) => {
  const formattedDate = format(new Date(props.history.date), "dd.MM.yyyy", {
    locale: ru,
  });
  const formattedTime = format(new Date(props.history.date), "HH:mm", {
    locale: ru,
  });

  return (
    <Card onPress={props.onPress}>
      <Title>{props.history.title}</Title>
      <Text>
        {formattedDate} в {formattedTime}
      </Text>
      <Text>Стоимость: {props.history.cost}₽</Text>
      <Text>Расстояние: {props.history.distance}км</Text>
    </Card>
  );
};

const History: React.FC = () => {
  const [histories, setHistories] = useState<IHistoryModel[]>([]);
  const [selectedTrip, setSelectedTrip] = useState<IHistoryModel>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setHistories(tripsData);
  }, []);

  const handlePress = (hist: IHistoryModel) => {
    setSelectedTrip(hist);
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
    setSelectedTrip(null);
  };

  return (
    <Container>
      <Header>Ваша история поездок</Header>
      <FlatList
        data={histories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HistCard history={item} onPress={() => handlePress(item)} />
        )}
      />
      <HistoryModal
        visible={modalVisible}
        onClose={handleClose}
        hist={selectedTrip}
      />
    </Container>
  );
};

export default History;

//#region CSS
const Container = styled.View`
  flex: 1;
  background-color: #f9f9f9;
`;

const Header = styled.Text`
  margin: 16px;
  font-size: 28px;
  color: black;
  font-weight: bold;
`;

const Card = styled.TouchableOpacity`
  background-color: #ffa42d;
  margin-left: 12px;
  margin-right: 12px;
  padding: 16px;
  margin-vertical: 8px;
  border-radius: 8px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 1;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;
//#endregion
