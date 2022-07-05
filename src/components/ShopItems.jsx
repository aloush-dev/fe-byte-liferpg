import { useEffect, useState, useContext } from "react";
import { userContext } from "../Context/User";
import styles from "../styles/shopitems.module.css";
import { updateUser } from "../utils/api";

export const ShopItems = ({ item, idx }) => {
  const { user, setUser } = useContext(userContext);

  const buyItem = () => {
    if (user.currency >= item.price) {
      const newUser = {
        ...user,
        currency: user.currency - item.price,
        inventory: [...user.inventory, item.id],
      }
      updateUser(newUser); 
      setUser(newUser);
    }
  };

  const boughtItem = () => {
    return user.inventory.includes(item.id)
  };


  return (
    <li className={styles.itemsList}>
      <h2>{item.item_name}</h2>
      <img src={item.sprite} alt={item.item_name} />
      <p>{item.description}</p>
      <h4>Price {item.price}</h4>
      <h4> XP left {item.unlock_xp}</h4>
      <button
        onClick={buyItem}
        disabled={
          user.currency < item.price ||
          user.experience < item.unlock_xp ||
          boughtItem()
        }
      >
        Buy
      </button>
    </li>
  );
};
