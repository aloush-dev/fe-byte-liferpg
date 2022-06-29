import styles from "../styles/game.module.css";
import { Stage, Sprite } from "@inlet/react-pixi";
import floor from "../assets/floor_checkered_white.png";

export const Game = () => {
  return (
    <Stage width={428} height={400}>
      <Sprite image={floor} width={50} height={50} x={124} y={127} />
      <Sprite image={floor} width={50} height={50} x={150} y={150} />
    </Stage>
  );
};
