import styles from "../styles/nav.module.css";
import {AiFillShop} from 'react-icons/ai'
import {RiSettings3Fill, RiAccountCircleFill} from 'react-icons/ri'
import { Link } from "react-router-dom";
import inventory from '../assets/icons/backpack.png'
import tasks from '../assets/icons/scroll.png'

export const Nav = () => {
  return (
    <nav>
      <div className={styles.container}>
        <button className={styles.navbut}><RiSettings3Fill/></button>
        <button className={styles.navbut}><Link to="/profile"><RiAccountCircleFill/></Link></button>
        <button className={styles.navbut}><Link to="/tasks"><img src={tasks} alt="tasks"/></Link></button>
        <button className={styles.navbut}><Link to="/inventory"><img src={inventory} alt="inventory"/></Link></button>
        <button className={styles.navbut}><Link to="/shop"><AiFillShop/></Link></button>
      </div>
    </nav>
  );
};
