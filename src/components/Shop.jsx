import styles from "../styles/shop.module.css";
import { useEffect, useState } from "react";
import { getItems } from "../utils/api";

export const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  }, []);

  return (
    <>
      <ul className={styles.allItems}>
        <h2>Shop</h2>
        {items.map((item) => {
            return(
                <li className="itemsList">
                <h2>{item.item_name}</h2>
                <img src={item.sprite} alt={item.item_name} />
                <p>{item.description}</p>
                <h3>{item.price}</h3>
                <h3>{item.unlock_xp}</h3>
                </li>)
        })}
      </ul>
    </>
  );
};
