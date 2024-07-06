import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import YaMap from "react-native-yamap";
import Geolocation, { GeoPosition } from "react-native-geolocation-service";
import { yandexApiKey } from "../../settings.json";
import { PermissionsAndroid, Platform } from "react-native";

const userIcon = require("../assets/icons/map/navigation-cursor.svg");

const YAMap = styled(YaMap)`
  width: 100%;
  height: 100%;
`;

const YandexMap: React.FC = () => {
  console.log("start");
  console.log();

  // YaMap.setLocale("ru_RU");

  const [location, setLocation] = useState<GeoPosition | null>(null);
  const [hasLocationPermission, setHasLocationPermission] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    requestLocationPermission();
    getLocation();

    return () => {};
  }, []);

  const requestLocationPermission = async () => {
    console.log("requestLocationPermission");
    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Разрешение на получение геоданных",
          message: "Приложению требуется получить доступ к вашим геоданным",
          buttonNeutral: "Позже",
          buttonNegative: "Отмена",
          buttonPositive: "OK",
        }
      );
      setHasLocationPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
    } else {
      setHasLocationPermission(true);
    }
  };

  const getLocation = async () => {
    console.log("getLocation");

    if (hasLocationPermission) {
      await Geolocation.getCurrentPosition(
        (position) => {
          console.log("location: ", position);
          setLocation(position);
        },
        (error) => {
          console.log("location error: ", error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  };

  return (
    <YAMap
    // initialRegion={{
    //   lat: location && location.coords ? location.coords.latitude : 0,
    //   lon: location && location.coords ? location?.coords.longitude : 0,
    //   zoom: 27,
    // }}
    //showUserPosition={true}
    //followUser={true}
    //userLocationIcon={userIcon}
    />
  );
};

export default YandexMap;
