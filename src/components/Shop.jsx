import styles from "../styles/shop.module.css";
import { useEffect, useState } from "react";
import { getItems } from "../utils/api";
import { ShopItems } from "./ShopItems";

export const Shop = () => {
  const [items, setItems] = useState([]);


    

    return (

  useEffect(() => {
    getItems().then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  }, []);


  return (
    <>
      <h3 className={styles.title}>Shop</h3>
      <ul className={styles.allItems}>
        {items.map((item, idx) => {
          return <ShopItems item={item} idx={idx} />;
        })}
      </ul>
    </>
  );
};
