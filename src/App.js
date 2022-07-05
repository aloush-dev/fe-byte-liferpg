import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Game } from "./components/Game";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { TaskList } from "./components/TaskList";
import { userContext } from "./Context/User.js";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { Inventory } from "./components/Inventory";



function App() {
  const [user, setUser] = useState({username: ""});


  if (user.username) {
    return (
      <userContext.Provider value={{ user, setUser }}>
          <div className="container">
            <Header />
            <Game />
            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/tasks" element={<TaskList />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/inventory" element={<Inventory />} />
            </Routes>
            <Nav />
          </div>
      </userContext.Provider>
    );
  }

  return (
    <userContext.Provider value={{ user, setUser }}>
        <div className="container">
          <Header />
          <Login />
        </div>
    </userContext.Provider>
  );
}

export default App;
