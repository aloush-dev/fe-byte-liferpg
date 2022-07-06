import { useContext } from "react";
import { userContext } from "../Context/User";
import styles from "../styles/shopitems.module.css";
import { updateUser } from "../utils/api";
import { FaCartPlus } from "react-icons/fa";
import coin from "../assets/icons/coin.png";
import star from "../assets/icons/star.png";

export const ShopItems = ({ item, idx }) => {
  const { user, setUser } = useContext(userContext);

  const buyItem = () => {
    if (user.currency >= item.price) {
      const newUser = {
        ...user,
        currency: user.currency - item.price,
        inventory: [...user.inventory, item.id],
      };
      updateUser(newUser);
      setUser(newUser);
    }
  };

  const boughtItem = () => {
    return user.inventory.includes(item.id);
  };

  return (
    <li className={styles.itemsList}>
      <h2>{item.item_name}</h2>
      <img className={styles.picimg2} src={item.sprite} alt={item.item_name} />
      <p>{item.description}</p>
      <div className={styles.pricebar}>
        <h4>
          <img className={styles.picimg} alt="justsomething" src={coin} />{" "}
          <div className={styles.othertext}>{item.price}</div>
        </h4>
        <h4>
          <img className={styles.picimg} alt="justsomething" src={star} />
          <div className={styles.othertext}>{item.unlock_xp}</div>
        </h4>
      </div>
      <div className={styles.cartbut}>
        <button
          onClick={buyItem}
          disabled={
            user.currency < item.price ||
            user.experience < item.unlock_xp ||
            boughtItem()
          }
        >
          <FaCartPlus />
        </button>
      </div>
    </li>
  );
};
