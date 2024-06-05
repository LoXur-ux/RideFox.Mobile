import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./src/redux/Store";
import NavigationApp from "./src/components/NavigationApp";

const App: React.FC = () => {
  // TS Code

  // UI
  return (
    <Provider store={store}>
      <NavigationApp />
      <StatusBar style="auto" />
    </Provider>
  );
};
export default App;
