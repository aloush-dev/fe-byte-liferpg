import { useContext, useEffect, useState } from "react";
import styles from "../styles/expbar.module.css";
import { getProfile } from "../utils/api";
import coin from "../assets/icons/GoldenCoin.png";
import { userContext } from "../Context/User";

export const Expbar = () => {
  const { user } = useContext(userContext);

  return (
    <div className={styles.expbar}>
      <div className={styles.exp}>
        <div className={styles.playerlevel}>
          {user.experience < 100 ? 1 : ""}
        </div>

        <div className={styles.barmid}> {user.experience} / 100</div>
      </div>

      <div className={styles.currency}>
        <img src={coin} alt="currency counter"/>
        {user.currency}
      </div>
    </div>
  );
};
