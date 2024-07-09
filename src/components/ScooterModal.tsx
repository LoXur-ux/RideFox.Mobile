import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components/native";
import IScooterModel from "../types/model/IScooterModel";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";

interface ScooterModalProps {
  visible: boolean;
  scooter: IScooterModel | null;
  onClose: () => void;
  onRent: () => void;
}

const ScooterModal: React.FC<ScooterModalProps> = ({
  visible,
  scooter,
  onClose,
  onRent,
}) => {
  const selectedScooter = useSelector(
    (state: RootState) => state.scooter.selectedScooter
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <ModalContainer>
        <ModalContent>
          {selectedScooter ? (
            scooter && (
              <>
                <Text style={styles.modalTitle}>Самокат №{scooter.name}</Text>
                <Text style={styles.modalText}>
                  Заряд батареии: {scooter.charge}%
                </Text>
                <Text style={styles.modalText}>Стартовая цена: 60₽</Text>
                <TouchableOpacity style={styles.rentButton} onPress={onRent}>
                  <Text style={styles.buttonText}>Арендовать</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCancle} onPress={onClose}>
                  <Text style={styles.buttonCancleText}>Отмена</Text>
                </TouchableOpacity>
              </>
            )
          ) : (
            <Text style={styles.modalText}>
              Что-то пошло не так...
              <br />
              Попробуйте снова
            </Text>
          )}
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.View`
  width: 80%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  align-items: center;
`;

const styles = StyleSheet.create({
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 8,
  },
  rentButton: {
    marginTop: 16,
    backgroundColor: "#ffa42d",
    padding: 10,
    borderRadius: 5,
  },
  buttonCancle: {
    marginTop: 16,
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#black",
    fontSize: 16,
  },
  buttonCancleText: {
    color: "black",
    fontSize: 16,
  },
});

export default ScooterModal;
