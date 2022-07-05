import styles from "../styles/shop.module.css";
import { useEffect, useState, useContext } from "react";
import { getItems } from "../utils/api";
import { userContext } from "../Context/User";
import { ShopItems } from "./ShopItems";

export const Shop = () => {
const { user, setUser } = useContext(userContext);
//console.log(user)
  const [items, setItems] = useState([]);
  

  useEffect(() => {
    getItems().then((response) => {
        console.log(response.data)
      setItems(response.data);
    });
  }, []);



const buyItem = () => {
    // setUser({...user}, user.currency - )
}

  return (
    <>
       <h3 className={styles.title}>Shop</h3>
      <ul className={styles.allItems}>
        {items.map((item, idx) => {
            return <ShopItems item={item} idx={idx} />
        })}
      </ul>
    </>
  );
};
