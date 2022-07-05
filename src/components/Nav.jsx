import styles from "../styles/nav.module.css";
import {AiFillShop} from 'react-icons/ai'
import {RiSettings3Fill, RiAccountCircleFill} from 'react-icons/ri'
import { Link } from "react-router-dom";
import inventory from '../assets/icons/backpack.png'
import tasks from '../assets/icons/scroll.png'
import { logoutUser } from "../utils/api"
import { useContext } from "react";
import { userContext } from "../Context/User"

export const Nav = () => {
  const { setUser } = useContext(userContext);

  return (
    <nav>
      <div className={styles.container}>
        <button className={styles.navbut}><RiSettings3Fill/></button>
        <button className={styles.navbut}><Link to="/profile"><RiAccountCircleFill/></Link></button>
        <button className={styles.navbut}><Link to="/tasks"><img src={tasks} alt="tasks"/></Link></button>
        <button className={styles.navbut}><Link to="/inventory"><img src={inventory} alt="inventory"/></Link></button>
        <button className={styles.navbut}><Link to="/shop"><AiFillShop/></Link></button>
        <button onClick={async () => {
          await logoutUser()
          setUser({})

          }} className={styles.navbut}><Link to="/">Logout</Link></button>
      </div>
    </nav>
  );
};
