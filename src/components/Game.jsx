import styles from "../styles/game.module.css";
import { Stage, Sprite } from "@inlet/react-pixi";
import floor from "../assets/floor_carpet_cream.png";
import bathroomFloor from "../assets/floor_tile_pink.png";
import wall from "../assets/walls_brick_light.png";
import { Expbar } from "./ExpBar";
import { getItems, } from "../utils/api";
import { useEffect, useState } from "react";
import { RoomSelector } from "./RoomSelector";


export const Game = ({ bathroomLookUp, kitchenLookUp, livingRoomLookUp }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentRoom, setCurrentRoom] = useState("Living Room");

  useEffect(() => {
    getItems().then((response) => {
      setItems(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  if (currentRoom === "Kitchen") {
    return (
      <div>
        <Expbar />

        <div className={styles.container}>
          <div className={styles.game}>
            <Stage
              width={window.innerWidth - 20}
              height={window.innerWidth - 100}
              options={{ backgroundAlpha: 0 }}
            >
              <Sprite
                image={bathroomFloor}
                height={window.innerWidth / 2}
                width={window.innerWidth}
                position={[0, 60]}
              />
              <Sprite
                image={wall}
                height={window.innerWidth / 2}
                width={window.innerWidth}
                position={[0, 58]}
              />
              {kitchenLookUp.Kitchen.FRIDGE ? (
                <Sprite
                  value="toilet"
                  image={kitchenLookUp.Kitchen.FRIDGE}
                  height={70}
                  width={40}
                  position={[240, 90]}
                />
              ) : null}

              {kitchenLookUp.Kitchen.OVEN ? (
                <Sprite
                  value="bath"
                  image={kitchenLookUp.Kitchen.OVEN}
                  position={[70, 160]}
                  anchor={0.5}
                  scale={{ x: -1, y: 1 }}
                  height={55}
                  width={55}
                />
              ) : null}

              {kitchenLookUp.Kitchen.CHAIR ? (
                <Sprite
                  value="sink"
                  image={kitchenLookUp.Kitchen.CHAIR}
                  position={[350, 160]}
                  anchor={0.5}
                  scale={{ x: 1, y: 1 }}
                  height={70}
                  width={70}
                />
              ) : null}

              <Sprite
                value="rug"
                image={livingRoomLookUp["Living Room"].RUG}
                position={[170, 190]}
                anchor={0.5}
                height={50}
                width={90}
              />
            </Stage>
          </div>
        </div>
        <RoomSelector
          currentRoom={currentRoom}
          setCurrentRoom={setCurrentRoom}
        />
      </div>
    );
  }

  if (currentRoom === "Bathroom") {
    return (
      <div>
        <Expbar />

        <div className={styles.container}>
          <div className={styles.game}>
            <Stage
              width={window.innerWidth - 20}
              height={window.innerWidth - 100}
              options={{ backgroundAlpha: 0 }}
            >
              <Sprite
                image={bathroomFloor}
                height={window.innerWidth / 2}
                width={window.innerWidth}
                position={[0, 60]}
              />
              <Sprite
                image={wall}
                height={window.innerWidth / 2}
                width={window.innerWidth}
                position={[0, 58]}
              />
              {bathroomLookUp.Bathroom.TOILET ? (
                <Sprite
                  value="toilet"
                  image={bathroomLookUp.Bathroom.TOILET}
                  height={50}
                  width={40}
                  position={[240, 100]}
                />
              ) : null}

              {bathroomLookUp.Bathroom.BATH ? (
                <Sprite
                  value="bath"
                  image={bathroomLookUp.Bathroom.BATH}
                  position={[70, 160]}
                  anchor={0.5}
                  scale={{ x: -1, y: 1 }}
                  height={55}
                  width={90}
                />
              ) : null}

              {bathroomLookUp.Bathroom.SINK ? (
                <Sprite
                  value="sink"
                  image={bathroomLookUp.Bathroom.SINK}
                  position={[310, 130]}
                  anchor={0.5}
                  scale={{ x: 1, y: 1 }}
                  height={30}
                  width={30}
                />
              ) : null}

              <Sprite
                value="rug"
                image={livingRoomLookUp["Living Room"].RUG}
                position={[170, 190]}
                anchor={0.5}
                height={50}
                width={90}
              />
            </Stage>
          </div>
        </div>
        <RoomSelector
          currentRoom={currentRoom}
          setCurrentRoom={setCurrentRoom}
        />
      </div>
    );
  }

  if (currentRoom === "Living Room") {
    return (
      <div>
        <Expbar />

        <div className={styles.container}>
          <div className={styles.game}>
            <Stage
              width={window.innerWidth - 20}
              height={window.innerWidth - 100}
              options={{ backgroundAlpha: 0 }}
            >
              <Sprite
                image={floor}
                height={window.innerWidth / 2}
                width={window.innerWidth}
                position={[0, 60]}
              />
              <Sprite
                image={wall}
                height={window.innerWidth / 2}
                width={window.innerWidth}
                position={[0, 58]}
              />
              {livingRoomLookUp["Living Room"].BED ? (
                <Sprite
                  value="bed"
                  image={livingRoomLookUp["Living Room"].BED}
                  height={70}
                  width={130}
                  position={[200, 130]}
                />
              ) : null}

              {livingRoomLookUp["Living Room"].SOFA ? (
                <Sprite
                  value="sofa"
                  image={livingRoomLookUp["Living Room"].SOFA}
                  position={[70, 170]}
                  anchor={0.5}
                  scale={{ x: -1, y: 1 }}
                  height={75}
                  width={110}
                />
              ) : null}

              {livingRoomLookUp["Living Room"].RUG ? (
                <Sprite
                  value="rug"
                  image={livingRoomLookUp["Living Room"].RUG}
                  position={[190, 210]}
                  anchor={0.5}
                  height={50}
                  width={90}
                />
              ) : null}

              {livingRoomLookUp["Living Room"].CABINET ? (
                <Sprite
                  value="cabinet"
                  image={livingRoomLookUp["Living Room"].CABINET}
                  position={[360, 150]}
                  anchor={0.5}
                  scale={{ x: 1, y: 1 }}
                  height={90}
                  width={50}
                />
              ) : null}
            </Stage>
          </div>
        </div>
        <RoomSelector
          currentRoom={currentRoom}
          setCurrentRoom={setCurrentRoom}
        />
      </div>
    );
  }
};
