import { useContext, useEffect, useState } from "react";
import { userContext } from "../Context/User";
import styles from "../styles/inventory.module.css";
import { getItems } from "../utils/api";
import { InventoryItemCard } from "./InventoryItemCard";

export const Inventory = () => {
  const { user } = useContext(userContext);

  const [loading, setLoading] = useState(false);
  const[ownedItems, setOwnedItems] = useState([])

  let itemArr = []

  useEffect(() => {
    getItems().then((data) => {
      // eslint-disable-next-line
      itemArr = data
      const ownedArray = itemArr.filter((item) => {
        return user.inventory.some((itemOwned) => {
          return item.id === itemOwned;
        });
      });
      setOwnedItems(ownedArray);
    });
    setLoading(false)
  }, []);


  if (loading) {
    return <p>Loading</p>;
  }


  return (
    <div className={styles.container}>
      <ul>
        {ownedItems.map((item, index) => {
          return <InventoryItemCard item={item} key={index} />;
        })}
      </ul>
    </div>
  );
};
