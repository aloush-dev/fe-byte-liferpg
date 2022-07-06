import styles from "../styles/inventoryitemcard.module.css";
import { BsEyeFill } from "react-icons/bs";
import { getItems, getRooms, updateRooms } from "../utils/api";
import { useEffect, useState } from "react";

export const InventoryItemCard = ({
  item,
  bathroomLookUp,
  kitchenLookUp,
  livngRoomLookUp,
}) => {
  const [items, setItems] = useState();
  const [rooms, setRooms] = useState();

  let id = 0;

  function handleSubmit() {
    let arrToSend = [];
    if (bathroomLookUp.Bathroom.hasOwnProperty(item.slot)) {
      id = rooms[1].id;
      const array = rooms[1].shop_items.map((newItem) => {
        return items.filter((filterItem) => {
          return filterItem.id === newItem;
        })[0];
      });
      let targetItem = 0;
      if (
        array.some((arrayItems) => {
          if (arrayItems.slot === item.slot) {
            targetItem = arrayItems.id;
            return true;
          }
          return false;
        })
      ) {
        setRooms((oldRooms) => {
          const newRooms = [...oldRooms];
          newRooms[1].shop_items[newRooms[1].shop_items.indexOf(targetItem)] =
            item.id;
          return newRooms;
        });
        arrToSend = rooms[1].shop_items;
      } else {
        arrToSend.push(...rooms[1].shop_items, item.id);
      }
    }
    
    
    else if (kitchenLookUp.Kitchen.hasOwnProperty(item.slot)) {
      id = rooms[2].id;
      const array = rooms[2].shop_items.map((newItem) => {
        return items.filter((filterItem) => {
          return filterItem.id === newItem;
        })[0];
      });
      let targetItem = 0;
      if (
        array.some((arrayItems) => {
          if (arrayItems.slot === item.slot) {
            targetItem = arrayItems.id;
            return true;
          }
          return false;
        })
      ) {
        setRooms((oldRooms) => {
          const newRooms = [...oldRooms];
          newRooms[2].shop_items[newRooms[2].shop_items.indexOf(targetItem)] =
            item.id;
          return newRooms;
        });
        arrToSend = rooms[2].shop_items;
      } else {
        arrToSend.push(...rooms[2].shop_items, item.id);
      }
    } 
    
    
    else {
      id = rooms[0].id;
      const array = rooms[0].shop_items.map((newItem) => {
        return items.filter((filterItem) => {
          return filterItem.id === newItem;
        })[0];
      });
      let targetItem = 0;
      if (
        array.some((arrayItems) => {
          if (arrayItems.slot === item.slot) {
            targetItem = arrayItems.id;
            return true;
          }
          return false;
        })
      ) {
        setRooms((oldRooms) => {
          const newRooms = [...oldRooms];
          newRooms[0].shop_items[newRooms[0].shop_items.indexOf(targetItem)] =
            item.id;
          return newRooms;
        });
        arrToSend = rooms[0].shop_items;
      } else {
        arrToSend.push(...rooms[0].shop_items, item.id);
      }
    }

    updateRooms(id, { shop_items: arrToSend });
  }

  useEffect(() => {
    getItems().then((response) => {
      setItems(response.data);
    });
    getRooms().then((data) => {
      setRooms(data.data);
    });
  });

  return (
    <>
      <li className={styles.container}>
        <div className={styles.inventory}>
          <div> {item.item_name}</div>
          <div>
            <img src={item.sprite} alt="item sprite" />
          </div>
          <div className={styles.buttonbar}>
            <button onClick={handleSubmit}>
              <BsEyeFill />
            </button>
          </div>
        </div>
      </li>
    </>
  );
};
