import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Game } from "./components/Game";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Header />
      <Game />
      <Routes>
        <Route />
      </Routes>
      <Nav />
    </>
  );
}

export default App;
