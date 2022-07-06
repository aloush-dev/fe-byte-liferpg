import { useContext } from "react";
import styles from "../styles/expbar.module.css";
import coin from "../assets/icons/coin.png";
import star from "../assets/icons/star.png";
import { userContext } from "../Context/User";

export const Expbar = () => {
  const { user } = useContext(userContext);

  return (
    <div className={styles.expbar}>
      <div className={styles.exp}>
        <img src={star} alt="xp counter" />
        {user.experience}
      </div>

      <div className={styles.currency}>
        <img src={coin} alt="currency counter" />
        {user.currency}
      </div>
    </div>
  );
};
