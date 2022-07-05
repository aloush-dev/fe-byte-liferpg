import { useEffect, useState } from "react";
import styles from "../styles/expbar.module.css";
import { getProfile } from "../utils/api";
import coin from "../assets/icons/coin.png";

export const Expbar = () => {
  const [player, setPlayer] = useState({});

  useEffect(() => {
    getProfile().then(({ data }) => {
      setPlayer(data);
    });
  }, []);

  return (
    <div className={styles.expbar}>
      <div className={styles.exp}>
        <div className={styles.playerlevel}>
          {player.experience < 100 ? 1 : ""}
        </div>

        <div className={styles.barmid}> {player.experience} / 100</div>
      </div>

      <div className={styles.currency}>
        <img src={coin} alt="currency counter"/>
        {player.currency}
      </div>
    </div>
  );
};
