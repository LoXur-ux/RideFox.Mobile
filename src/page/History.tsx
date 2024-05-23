import React, { useEffect, useState } from "react";
import { Text, FlatList } from "react-native";
import styled from "styled-components/native";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import HistoryModal from "./../components/HistoryModal";

const trips: IHistoryModel[] = [
  {
    id: "1",
    title: "Поездка 1",
    content: "Полное описание первой поездки.",
    date: "2024-05-20T10:00:00.000Z",
    cost: 200,
    distance: 5,
  },
  {
    id: "2",
    title: "Поездка 2",
    content: "Полное описание второй поездки.",
    date: "2024-05-21T11:00:00.000Z",
    cost: 300,
    distance: 7,
  },
  {
    id: "3",
    title: "Поездка 3",
    content: "Полное описание третьей поездки.",
    date: "2024-05-22T12:00:00.000Z",
    cost: 150,
    distance: 3,
  },
];

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
    setHistories(trips);
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
  padding: 16px;
  background-color: #f9f9f9;
`;

const Card = styled.TouchableOpacity`
  background-color: #ffa42d;
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
