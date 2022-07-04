import styles from "../styles/game.module.css";
import { Stage, Sprite, PixiComponent } from "@inlet/react-pixi";
import floor from "../assets/floor_carpet_cream.png";
import wall from "../assets/walls_brick_light.png";
import { useState } from "react";

export const Game = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  return (
    <div className={styles.game}>
      <Stage width={windowSize.width} height={windowSize.width - 100}>
        <Sprite
          image={floor}
          height={windowSize.width / 2}
          width={windowSize.width}
          position={[0, 60]}
        />
        <Sprite
          image={wall}
          height={windowSize.width / 2}
          width={windowSize.width}
          position={[0, 58]}
        />
      </Stage>
    </div>
  );
};
