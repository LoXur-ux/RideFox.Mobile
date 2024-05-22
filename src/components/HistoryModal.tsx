import React from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalView = styled.View`
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  elevation: 5;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Content = styled.Text`
  font-size: 16px;
  margin-bottom: 20px;
`;

const DateText = styled.Text`
  font-size: 14px;
  margin-bottom: 20px;
`;

const CostText = styled.Text`
  font-size: 16px;
  margin-bottom: 20px;
`;

const DistanceText = styled.Text`
  font-size: 16px;
  margin-bottom: 20px;
`;

const CloseButton = styled.TouchableOpacity`
  background-color: #ffa42d;
  padding: 10px 20px;
  border-radius: 5px;
`;

const CloseButtonText = styled.Text`
  color: #2e2e2e;
  font-size: 16px;
  font-weight: bold;
`;

const HistoryModal = ({ visible, onClose, trip }) => {
  if (!trip) {
    return null;
  }

  const formattedDate = format(new Date(trip.date), "dd.MM.yyyy", {
    locale: ru,
  });
  const formattedTime = format(new Date(trip.date), "HH:mm", { locale: ru });

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Container>
        <ModalView>
          <Title>{trip.title}</Title>
          <Content>{trip.fullContent}</Content>
          <DateText>
            {formattedDate} в {formattedTime}
          </DateText>
          <CostText>Стоимость: {trip.cost}</CostText>
          <DistanceText>Расстояние: {trip.distance}</DistanceText>
          <CloseButton onPress={onClose}>
            <CloseButtonText>Закрыть</CloseButtonText>
          </CloseButton>
        </ModalView>
      </Container>
    </Modal>
  );
};

export default HistoryModal;
