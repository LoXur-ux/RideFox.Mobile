import React, { useState } from "react";
import { Text, FlatList } from "react-native";
import styled from "styled-components/native";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import HistoryModal from "./../components/HistoryModal";

const trips = [
  {
    id: "1",
    title: "Поездка 1",
    shortContent: "Краткое описание первой поездки.",
    fullContent: "Полное описание первой поездки.",
    date: "2024-05-20T10:00:00.000Z",
    cost: "200 RUB",
    distance: "5 km",
  },
  {
    id: "2",
    title: "Поездка 2",
    shortContent: "Краткое описание второй поездки.",
    fullContent: "Полное описание второй поездки.",
    date: "2024-05-21T11:00:00.000Z",
    cost: "300 RUB",
    distance: "7 km",
  },
  {
    id: "3",
    title: "Поездка 3",
    shortContent: "Краткое описание третьей поездки.",
    fullContent: "Полное описание третьей поездки.",
    date: "2024-05-22T12:00:00.000Z",
    cost: "150 RUB",
    distance: "3 km",
  },
];

const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #f9f9f9;
`;

const Card = styled.TouchableOpacity`
    background-color: #FFA42D;
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

const HistCard = ({ title, shortContent, date, cost, distance, onPress }) => {
  const formattedDate = format(new Date(date), "dd.MM.yyyy", { locale: ru });
  const formattedTime = format(new Date(date), "HH:mm", { locale: ru });

  return (
    <Card onPress={onPress}>
      <Title>{title}</Title>
      <Text>{shortContent}</Text>
      <Text>
        {formattedDate} в {formattedTime}
      </Text>
      <Text>Стоимость: {cost}</Text>
      <Text>Расстояние: {distance}</Text>
    </Card>
  );
};

const History: React.FC = () => {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (trip) => {
    setSelectedTrip(trip);
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
    setSelectedTrip(null);
  };

  return (
    <Container>
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HistCard
            title={item.title}
            shortContent={item.shortContent}
            date={item.date}
            cost={item.cost}
            distance={item.distance}
            onPress={() => handlePress(item)}
          />
        )}
      />
      <HistoryModal
        visible={modalVisible}
        onClose={handleClose}
        trip={selectedTrip}
      />
    </Container>
  );
};

export default History;
