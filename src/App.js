import { useEffect, useState } from "react";
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
import { Shop } from "./components/Shop";
import { getItems, getRooms } from "./utils/api";

function App() {
  const [user, setUser] = useState({ username: "" });
  const [items, setItems] = useState();

  const [bathroomLookUp, setBathroomLookUp] = useState({
    Bathroom: {
      TOILET: "",
      SINK: "",
      BATH: "",
    },
  });

  const [livingRoomLookUp, setLivingRoomLookUp] = useState({
    "Living Room": {
      SOFA: "",
      RUG: "",
      BED: "",
      CABINET: "",
    },
  });

  const [kitchenLookUp, setKitchenLookUp] = useState({
    Kitchen: {
      FRIDGE: "",
      OVEN: "",
      CHAIR: "",
    },
  });

  let itemArr = [];
  let bathroom = [];
  let bathroomArr = [];
  let livingroom = [];
  let livingroomArr = [];
  let kitchen = [];
  let kitchenArr = [];

  useEffect(() => {
    getItems()
      .then((response) => {
        itemArr = response.data;
      })
      .then(() => {
        getRooms()
          .then((data) => {
            livingroom = data.data[0].shop_items;
            bathroom = data.data[1].shop_items;
            kitchen = data.data[2].shop_items;
          })
          .then(() => {
            bathroomArr = bathroom.map((bathroomItem) => {
              return itemArr.filter((item) => {
                return item.id === bathroomItem;
              })[0];
            });

            livingroomArr = livingroom.map((livingroomItem) => {
              return itemArr.filter((item) => {
                return item.id === livingroomItem;
              })[0];
            });

            kitchenArr = kitchen.map((kitchenItem) => {
              return itemArr.filter((item) => {
                return item.id === kitchenItem;
              })[0];
            });
          })
          .then(() => {
            setBathroomLookUp((oldBathroom) => {
              const newBathroom = { ...oldBathroom };
              bathroomArr.forEach((Item) => {
                newBathroom.Bathroom[Item.slot] = Item.sprite;
              });
              return newBathroom;
            });
            setLivingRoomLookUp((oldLivingRoom) => {
              const newLivingRoom = { ...oldLivingRoom };
              livingroomArr.forEach((Item) => {
                newLivingRoom["Living Room"][Item.slot] = Item.sprite;
              });
              return newLivingRoom;
            });
            setKitchenLookUp((oldKitchen) => {
              const newKitchen = { ...oldKitchen };
              kitchenArr.forEach((Item) => {
                newKitchen.Kitchen[Item.slot] = Item.sprite;
              });
              return newKitchen;
            });
          });
      });
  }, [user]);

  if (user.username) {
    return (
      <userContext.Provider value={{ user, setUser }}>
        <div className="container">
          <Header />
          <Game
            bathroomLookUp={bathroomLookUp}
            livingRoomLookUp={livingRoomLookUp}
            kitchenLookUp={kitchenLookUp}
          />
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/inventory"
              element={
                <Inventory
                  bathroomLookUp={bathroomLookUp}
                  setBathroomLookUp={setBathroomLookUp}
                  livingRoomLookUp={livingRoomLookUp}
                  setLivingRoomLookUp={setLivingRoomLookUp}
                  kitchenLookUp={kitchenLookUp}
                  setKitchenLookUp={setKitchenLookUp}
                />
              }
            />
            <Route path="/shop" element={<Shop />} />
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
