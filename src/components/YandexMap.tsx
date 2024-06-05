import React from "react";
import { YaMap } from "react-native-yamap";
import { yandexApiKey } from "../../settings.json";
import styled from "styled-components/native";

const YAMap = styled(YaMap)`
  width: 100%;
  height: 100%;
`;

const YandexMap = () => {
  YaMap.init(yandexApiKey);
  YaMap.setLocale("ru_RU");

  const userIcon = require("../../assets/icons/map/navigation-cursor.svg");

  return (
    <YAMap
      // initialRegion={{
      //   lat: 58.604247,
      //   lon: 49.598574,
      //   zoom: 30,
      // }}
      showUserPosition={true}
      followUser={true}
      userLocationIcon={userIcon}
    ></YAMap>
  );
};

export default YandexMap;
