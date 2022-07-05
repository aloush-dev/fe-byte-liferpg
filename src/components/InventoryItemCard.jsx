import styles from "../styles/inventoryitemcard.module.css";

export const InventoryItemCard = ({ item }) => {
  return (
    <>
      <li className={styles.container}>
        <div className={styles.inventory}>
          <div> {item.item_name}</div>
          <div>
            <img src={item.sprite} alt="item sprite" />
          </div>
          <div className={styles.buttonbar}>
            <button>Placed</button>
          </div>
        </div>
      </li>
    </>
  );
};
