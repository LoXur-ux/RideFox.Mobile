// src/ScooterModal.tsx

import React from "react";
import styled from "styled-components/native";
import Modal from "react-native-modal";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/Store";
import {
  bookScooter,
  clearSelection,
  rentScooter,
} from "../../redux/slices/scooterSlice";

const ModalContent = styled.View`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  align-items: center;
`;

const ModalText = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Button = styled.TouchableOpacity<{ primary?: boolean }>`
  background-color: ${(props) => (props.primary ? "#007bff" : "#6c757d")};
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  align-items: center;
  width: 100%;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const ScooterModal = () => {
  const dispatch = useDispatch();
  const selectedScooter = useSelector(
    (state: RootState) => state.scooter.selectedScooter
  );
  const isModalVisible = selectedScooter !== null;

  const closeModal = () => {
    dispatch(clearSelection());
  };

  const handleBookScooter = () => {
    dispatch(bookScooter(selectedScooter));
    closeModal();
  };

  const handleRentScooter = () => {
    dispatch(rentScooter(selectedScooter));
    closeModal();
  };

  return (
    <Modal isVisible={isModalVisible} onBackdropPress={closeModal}>
      <ModalContent>
        {selectedScooter && (
          <>
            <ModalText>Заряд: {selectedScooter.charge}%</ModalText>
            <ModalText>Статус: {selectedScooter.status}</ModalText>
            <Button primary onPress={handleBookScooter}>
              <ButtonText>Забронировать</ButtonText>
            </Button>
            <Button onPress={handleRentScooter}>
              <ButtonText>Арендовать</ButtonText>
            </Button>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ScooterModal;
