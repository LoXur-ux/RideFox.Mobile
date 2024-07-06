import axios from "axios";
import React, { useState, useEffect } from "react";
import { Alert, PermissionsAndroid } from "react-native";
import styled from "styled-components/native";
import { uri } from "../../settings.json";
import IScooterModel from "../types/model/IScooterModel";

const QRCodeScannerComponent = () => {
  const [scanned, setScanned] = useState(false);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Разрешение на использование камеры",
          message:
            "Для сканирования QR-кодов нам нужно ваше разрешение на использование камеры.",
          buttonNeutral: "Спросить позже",
          buttonNegative: "Отмена",
          buttonPositive: "ОК",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Разрешение на использование камеры получено");
      } else {
        console.log("Отказано в разрешении на использование камеры");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    Alert.alert("QR-код отсканирован", `Данные: ${data}`, [
      { text: "OK", onPress: () => setScanned(false) },
    ]);
  };

  return (
    <Container>
      {scanned && (
        <Overlay>
          <OverlayText>
            Сканирование завершено! Пожалуйста, отсканируйте новый QR-код.
          </OverlayText>
        </Overlay>
      )}
    </Container>
  );
};

export default QRCodeScannerComponent;

//#region CSS

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Marker = styled.View`
  border-width: 2px;
  border-color: #ffa42d;
`;

const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
`;

const OverlayText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

//#endregion
