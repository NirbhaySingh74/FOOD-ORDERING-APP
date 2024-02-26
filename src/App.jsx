import { Provider } from "react-redux";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { Outlet } from "react-router-dom";
import store from "./utils/store";
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}

export default App;
