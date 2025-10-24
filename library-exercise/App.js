import { Provider } from "react-redux";
import Navigation from "./src/navigation/navigation";
import initializeStore from "./src/store";

const store = initializeStore();

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App

// I don't know why using LayoutStart works but flexBox --> It was because react components (exported functions have to start with a capital letter)
