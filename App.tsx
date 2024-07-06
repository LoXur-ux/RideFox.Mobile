import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./src/redux/Store";
import YaMap from "react-native-yamap";
import NavigationApp from "./src/components/NavigationApp";
import { yandexApiKey, yandexApiJSHTTP } from "./settings.json";
const App: React.FC = () => {
  // TS Code
  //YaMap.init(yandexApiKey);
  // UI
  return (
    <Provider store={store}>
      <NavigationApp />
      <StatusBar style="auto" />
    </Provider>
  );
};
export default App;
