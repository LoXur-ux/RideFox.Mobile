import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import YaMap, {
  Circle,
  CircleProps,
  Marker,
  Point,
  Polygon,
} from "react-native-yamap";
import {
  getCurrentPositionAsync,
  LocationObject,
  requestForegroundPermissionsAsync,
} from "expo-location";
import scootersData from "../types/data/Scooters";
import { View, Modal, NativeSyntheticEvent } from "react-native";

import userIcon from "../assets/icons/map/navigate-cursor.png";
import scooterIcon from "../assets/icons/map/scooter-point.png";
import positionIcon from "../assets/icons/map/position.png";
import ScooterModal from "./ScooterModal";

const redZone: Point[] = [
  { lat: 58.603758, lon: 49.666286 },
  { lat: 58.603758, lon: 49.666286 },
  { lat: 58.60348, lon: 49.666953 },
  { lat: 58.603249, lon: 49.666971 },
  { lat: 58.603249, lon: 49.666971 },
  { lat: 58.603334, lon: 49.666286 },
  { lat: 58.603477, lon: 49.666298 },
];

const parks: CircleProps[] = [
  { center: { lat: 58.604223, lon: 49.666454 }, radius: 6 },
  { center: { lat: 58.602789, lon: 49.665813 }, radius: 12 },
];

const YandexMap: React.FC = () => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [targetPoint, setTargetPoint] = useState<Point | null>(null);
  const [hasLocationPermission, setHasLocationPermission] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const mapRef = useRef<YaMap>();

  useEffect(() => {
    if (location) return;
    updatePossition();
  }, []);

  const updatePossition = () => {
    try {
      (async () => {
        let { granted } = await requestForegroundPermissionsAsync();
        // console.log("status: ", granted);
        if (!granted) {
          return;
        } else {
          setHasLocationPermission(true);
        }

        let _location = await getCurrentPositionAsync({});
        setLocation((prev) => (prev = _location));
        mapRef.current.setCenter(
          {
            lat: _location.coords.latitude,
            lon: _location.coords.longitude,
          },
          20
        );
        console.log(_location);
      })();
    } catch (err) {
      console.log(err);
    }
  };

  const handleMapPress = async (event: NativeSyntheticEvent<Point>) => {
    const target: Point = event.nativeEvent;
    setTargetPoint(target);
    setIsModalVisible(true);
  };

  const handleConfirmRoute = () => {
    const currentPoint: Point = {
      lat: location.coords.latitude,
      lon: location.coords.longitude,
    };

    console.log([currentPoint, targetPoint]);

    mapRef.current.findPedestrianRoutes([currentPoint, targetPoint], (e) => {
      console.log(e);
    });
    setIsModalVisible(false);
  };

  return (
    <Container>
      <YAMap
        style={{ width: "100%", height: "100%" }}
        ref={mapRef}
        initialRegion={{
          lat: location ? location?.coords?.latitude : 58.604305,
          lon: location ? location?.coords?.longitude : 49.665913,
          zoom: 20,
        }}
        showUserPosition={false}
        followUser={true}
        userLocationIcon={userIcon}
        onMapLongPress={handleMapPress}
      >
        <Marker
          point={{
            lat: location ? location?.coords?.latitude : 58.604305,
            lon: location ? location?.coords?.longitude : 49.665913,
          }}
          source={userIcon}
          scale={0.6}
        />
        <Polygon
          points={redZone}
          strokeColor="rgba(136, 18, 0, 0.75)"
          fillColor="rgba(217, 52, 27, 0.5)"
        />
        {parks.map((park, index) => (
          <View key={index}>
            <Marker point={park.center} />
            <Circle
              center={park.center}
              radius={park.radius}
              fillColor="rgba(243, 98, 40, 0.6)"
              strokeColor="rgba(203, 67, 14, 0.75)"
            />
          </View>
        ))}
        {scootersData.map((scooter) => (
          <Marker
            key={scooter.id}
            point={{ lat: scooter.lat, lon: scooter.lon }}
            source={scooterIcon}
            scale={0.4}
          />
        ))}
      </YAMap>
      <AddressInput placeholder="Введите адрес" />
      <ButtonPosition onPress={updatePossition}>
        <PositionIcon source={require("../assets/icons/map/position.png")} />
      </ButtonPosition>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <MainModalContainer>
          <ModalContainer>
            <ModalText>Хотите проложить маршрут до этой точки?</ModalText>
            <ModalButton onPress={handleConfirmRoute}>
              <ModalButtonText>Проложить</ModalButtonText>
            </ModalButton>
            <CancleButton onPress={() => setIsModalVisible(false)}>
              <ModalButtonText>Отмена</ModalButtonText>
            </CancleButton>
          </ModalContainer>
        </MainModalContainer>
      </Modal>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const YAMap = styled(YaMap)``;

const AddressInput = styled.TextInput`
  position: absolute;
  align-self: center;
  margin: 12px;
  padding: 12px;
  width: 90%;
  height: 62px;
  background-color: white;
  border-radius: 8px;
  font-size: 16px;
`;

const ButtonPosition = styled.TouchableOpacity`
  position: absolute;
  top: 60%;
  right: 0;
`;

const PositionIcon = styled.Image`
  width: 60px;
  height: 60px;
`;

const MainModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.View`
  background-color: white;
  width: 92%;
  align-items: center;
  border-radius: 20px;
  padding: 32px 16px;
  elevation: 5;
`;

const ModalText = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
`;

const ModalButton = styled.TouchableOpacity`
  background-color: #ffa42d;
  width: 40%;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
`;

const CancleButton = styled.TouchableOpacity`
  background-color: #fff;
  width: 40%;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
  border-width: 1px;
  border-color: black;
`;

const ModalButtonText = styled.Text`
  color: black;
  font-size: 20px;
  text-align: center;
`;

export default YandexMap;
