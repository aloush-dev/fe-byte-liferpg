import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Game } from "./components/Game";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { TaskList } from "./components/TaskList";
import { userContext } from "./Context/User.js";
import { Login } from "./components/Login";

function App() {
  const [user, setUser] = useState({ username: "" });
  console.log(user);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <div className="container">
        <Header />
        {user.username ? <Game /> : <Login />}
        <Routes>
          <Route path="/" element={<TaskList />} />
        </Routes>
        <Nav />
      </div>
    </userContext.Provider>
  );
}

export default App;
