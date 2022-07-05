import styles from "../styles/game.module.css";
import { Stage, Sprite } from "@inlet/react-pixi";
import floor from "../assets/floor_carpet_cream.png";
import wall from "../assets/walls_brick_light.png";

import { Expbar } from "./ExpBar";

export const Game = () => {

  return (
    <div>
      <Expbar />

      <div className={styles.container}>
        <div className={styles.game}>
          <Stage width={window.innerWidth} height={window.innerWidth - 100}>
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
          </Stage>
        </div>
      </div>
    </div>
  );
};
