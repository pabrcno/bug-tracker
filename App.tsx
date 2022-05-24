import Main from "./presentation/core/Main";
import { store } from "./application/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
