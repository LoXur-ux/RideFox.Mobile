import React, { useState, useEffect } from "react";
import { Alert, Text, Button } from "react-native";
import { RNCamera } from "react-native-camera";
import styled from "styled-components/native";
//import { request, PERMISSIONS } from "react-native-permissions";
import Modal from "react-native-modal";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CameraView = styled(RNCamera)`
  flex: 1;
  width: 100%;
`;

const ScanButton = styled(Button)`
  margin-top: 20px;
`;

const ModalContainer = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
`;

const ModalText = styled.Text`
  margin-bottom: 15px;
  text-align: center;
`;

const ModalButton = styled.Button`
  margin-top: 10px;
`;

const QRScanner = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [scooterData, setScooterData] = useState(null);

  // useEffect(() => {
  //   requestCameraPermission();
  // }, []);

  // const requestCameraPermission = async () => {
  //   const result = await request(PERMISSIONS.ANDROID.CAMERA);
  //   setHasCameraPermission(result === "granted");
  // };

  const handleBarCodeScanned = ({ type, data }) => {
    if (!scanned) {
      setScanned(true);
      // Здесь можно добавить логику для проверки соответствия QR-кода и получения информации о самокате
      setScooterData({ id: data, model: "Scooter Model X", battery: "85%" }); // Заглушка данных самоката
      setIsModalVisible(true);
    }
  };

  const confirmRental = () => {
    // Логика для подтверждения аренды
    console.log(`Rental confirmed for scooter ID: ${scooterData.id}`);
    setIsModalVisible(false);
    setScanned(false);
  };

  if (hasCameraPermission === null) {
    return (
      <Container>
        <Text>Requesting for camera permission</Text>
      </Container>
    );
  }
  if (hasCameraPermission === false) {
    return (
      <Container>
        <Text>No access to camera</Text>
      </Container>
    );
  }

  return (
    <Container>
      <CameraView
        onBarCodeRead={scanned ? undefined : handleBarCodeScanned}
        captureAudio={false}
      />
      {scanned && (
        <ScanButton
          title="Tap to Scan Again"
          onPress={() => setScanned(false)}
        />
      )}

      <Modal isVisible={isModalVisible}>
        <ModalContainer>
          <ModalText>Model: {scooterData?.model}</ModalText>
          <ModalText>Battery: {scooterData?.battery}</ModalText>
          <ModalButton title="Confirm Rental" onPress={confirmRental} />
          <ModalButton
            title="Cancel"
            onPress={() => setIsModalVisible(false)}
          />
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default QRScanner;
