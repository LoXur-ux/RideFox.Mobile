import React, { useState, useEffect } from "react";
import { Text, Dimensions, TouchableOpacity, Image, View } from "react-native";
//import { Camera, CameraView } from "expo-camera";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { selectScooter } from "../redux/slices/scooterSlice";
import IScooterModel from "../types/model/IScooterModel";
import scootersData from "../types/data/Scooters";
import ScooterModal from "../components/ScooterModal";
import { CommonActions, useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const qrSize = width * 0.9;

const QRCodeScannerComponent = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [scanData, setScanData] = useState("");
  const [torchOn, setTorchOn] = useState(false);
  const [scooter, setScooter] = useState<IScooterModel | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigator = useNavigation();

  const dispatch = useDispatch();

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  // useEffect(() => {
  //   (async () => {
  //     const { granted } = await Camera.requestCameraPermissionsAsync();
  //     setHasPermission(granted);
  //   })();
  // }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    if (!scanned) {
      sleep(2000);
      setScanned(true);
      console.log(scanData, type);

      setScanData(data);
      const number = extractNumberFromQRCode(data);
      console.log(number);

      const _scooter = scootersData.find((item) => item.name == number);
      if (_scooter) {
        console.log(_scooter);
        setScooter(_scooter);
        dispatch(selectScooter(_scooter));
        setModalVisible(true);
      } else {
        setScanned(false);
      }
    }
  };

  const handleRent = () => {
    dispatch(selectScooter(scooter));
    navigator.dispatch(CommonActions.navigate({ name: "map" }));
    setModalVisible(false);
    setScanned(false);
  };

  const handleClose = () => {
    setScooter(null);
    dispatch(selectScooter(null));
    setModalVisible(false);
    setScanned(false);
  };

  const extractNumberFromQRCode = (data) => {
    const match = data.match(/\/qr\/(\d+)/);
    return match ? match[1] : null;
  };

  if (hasPermission === false) {
    return <Text>Ошибка получения доступа к камере</Text>;
  }

  return (
    <MainContainer>
      <Header>Отсканируйте QR-код на самокате</Header>
      <Container>
        {/* <CameraContainer
          facing="back"
          barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
          onBarcodeScanned={handleBarCodeScanned}
          style={{
            height: qrSize,
            width: qrSize,
            alignSelf: "center",
          }}
          enableTorch={torchOn}
        /> */}
        <ButtonContainer>
          <TorchButton onPress={() => setTorchOn(!torchOn)}>
            {torchOn ? (
              <TorchIcon source={require("../assets/icons/qr/torch-off.png")} />
            ) : (
              <TorchIcon source={require("../assets/icons/qr/torch-on.png")} />
            )}
          </TorchButton>
        </ButtonContainer>
      </Container>
      <ScooterModal
        visible={modalVisible}
        scooter={scooter}
        onClose={handleClose}
        onRent={handleRent}
      />
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
  background-color: #2e2e2e;
`;

const Header = styled.Text`
  margin: 16px;
  font-size: 28px;
  color: white;
  font-weight: bold;
`;

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

// const CameraContainer = styled(CameraView)`
//   justify-content: center;
//   align-items: center;
//   margin-top: 60px;
// `;

const ButtonContainer = styled.View`
  position: absolute;
  bottom: 60px;
  bottom: 30px;
  width: 100%;
  align-items: center;
`;

const TorchButton = styled(TouchableOpacity)`
  background-color: #ffa42d;
  padding: 8px 8px;
  border-radius: 8px;
  color: black;
`;

const TorchIcon = styled.Image`
  width: 75px;
  height: 75px;
`;

export default QRCodeScannerComponent;
