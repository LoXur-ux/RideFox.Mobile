import { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./src/redux/Store";
import { YaMap } from "react-native-yamap";
import NavigationApp from "./src/components/NavigationApp";
import { yandexApiKey } from "./settings.json";
import { View } from "react-native";

const App: React.FC = () => {
  // TS Code
  const [wasYaMapInit, setWasYaMapInit] = useState(false);

  useEffect(() => {
    console.log("App useEffect");
    try {
      if (!wasYaMapInit) {
        console.log(
          `Init YaMap with key: ${Object.keys({
            yandexApiKey,
          })} \'${yandexApiKey}\'`
        );
        YaMap.init(yandexApiKey);
        YaMap.setLocale("ru_RU");
        setWasYaMapInit(true);
      }
    } catch (err) {
      console.log(err);
    }
    return () => {};
  }, []);

  // UI
  return (
    <Provider store={store}>
      <StatusBar animated={true}  />
      <NavigationApp />
    </Provider>
  );
};

export default App;
