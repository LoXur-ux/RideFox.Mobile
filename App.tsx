import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./src/redux/Store";
import { YaMap } from "react-native-yamap";
import NavigationApp from "./src/components/NavigationApp";
import { yandexApiKey, yandexApiJSKey } from "./settings.json";
import { useEffect, useState } from "react";

const App: React.FC = () => {
  const [wasYaMapInit, setWasYaMapInit] = useState(false);
  // TS Code

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
      <NavigationApp />
      <StatusBar style="auto" />
    </Provider>
  );
};
export default App;
