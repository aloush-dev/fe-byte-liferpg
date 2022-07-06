import styles from "../styles/shop.module.css";
import { useEffect, useState } from "react";
import { getItems } from "../utils/api";
import { ShopItems } from "./ShopItems";

export const Shop = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItems().then((response) => {
      setItems(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div className={styles.container}>
      <ul>
        {items.map((item, idx) => {
          return <ShopItems item={item} key={idx} />;
        })}
      </ul>
    </div>
  );
};
