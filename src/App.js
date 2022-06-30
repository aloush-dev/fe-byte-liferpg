import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Game } from "./components/Game";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <div className="container">
      <Header />
      <Game />
      <Routes>
        <Route path="/" element={<TaskList />} />
      </Routes>
      <Nav />
    </div>
  );
}

export default App;
