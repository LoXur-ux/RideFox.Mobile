import React from "react";
import { YaMap, Marker } from "react-native-yamap";

const YandexMap = () => {
  return (
    <YaMap
      showUserPosition={false}
      rotateGesturesEnabled={false}
      nightMode={true}
      mapType={"vector"}
      initialRegion={{
        lat: 30,
        lon: 30,
        zoom: 7,
        azimuth: 0,
      }}
    ></YaMap>
  );
};

export default YandexMap;
