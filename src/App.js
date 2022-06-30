import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux/es/exports";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import store from "./Store";
import Details from "./Components/Details";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
