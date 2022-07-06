import styles from "../styles/nav.module.css";
import { Link } from "react-router-dom";
import inventory from '../assets/icons/Chest.png'
import tasks from '../assets/icons/Scroll.png'
import settings from '../assets/icons/Gear.png'
import shop from '../assets/icons/CopperCoin.png'


export const Nav = () => {


  return (
    <nav>
      <div className={styles.container}>
        <button className={styles.navbut}><Link to="/profile"><img src={settings} alt="settings"/></Link></button>
        <button className={styles.navbut}><Link to="/tasks"><img src={tasks} alt="tasks"/></Link></button>
        <button className={styles.navbut}><Link to="/inventory"><img src={inventory} alt="inventory"/></Link></button>
        <button className={styles.navbut}><Link to="/shop"><img src={shop} alt="shop"/></Link></button>



      </div>
    </nav>
  );
};
