import styles from "../styles/nav.module.css";
import {AiFillShop} from 'react-icons/ai'
import {RiSettings3Fill, RiAccountCircleFill} from 'react-icons/ri'
import {GoTasklist} from 'react-icons/go'

export const Nav = () => {
  return (
    <nav>
      <div className={styles.container}>
        <button className={styles.navbut}><RiSettings3Fill/></button>
        <button className={styles.navbut}><RiAccountCircleFill/></button>
        <button className={styles.navbut}><GoTasklist/></button>
        <button className={styles.navbut}><AiFillShop/></button>
      </div>
    </nav>
  );
};
