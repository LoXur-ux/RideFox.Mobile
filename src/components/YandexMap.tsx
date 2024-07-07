import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import YaMap from "react-native-yamap";
import {
  getCurrentPositionAsync,
  LocationObject,
  requestForegroundPermissionsAsync,
} from "expo-location";

const userIcon = require("../assets/icons/map/navigation-cursor.svg");

const YAMap = styled(YaMap)`
  width: 100%;
  height: 100%;
`;

const YandexMap: React.FC = () => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [hasLocationPermission, setHasLocationPermission] = useState(true);
  const mapRef = useRef<YaMap>();

  useEffect(() => {
    if (location) return;
    console.log("getLocation useEffect: ", location);
    try {
      (async () => {
        let { granted } = await requestForegroundPermissionsAsync();
        console.log("status: ", granted);
        if (!granted) {
          return;
        } else {
          setHasLocationPermission(true);
        }

        let _location = await getCurrentPositionAsync({});
        setLocation(_location);
        console.log(_location);
      })();
    } catch (err) {
      console.log(err);
    }
  }, [hasLocationPermission]);

  return (
    <YAMap
      style={{ width: "100%", height: "100%" }}
      ref={mapRef}
      initialRegion={{
        lat: location ? location?.coords?.latitude : 58.604305,
        lon: location ? location?.coords?.longitude : 49.665913,
        zoom: 15,
      }}
      showUserPosition={false}
      followUser={true}
      userLocationIcon={userIcon}
    />
  );
};

export default YandexMap;
