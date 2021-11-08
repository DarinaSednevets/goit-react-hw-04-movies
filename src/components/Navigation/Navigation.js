import { NavLink } from "react-router-dom";
import styles from './Navigation.module.css'
// 
function Navigation ()  {
    return (
        <nav className={styles.nav}>
            <NavLink exact to='/' className={styles.link} activeClassName={styles.linkActive}>Home</NavLink>
            <NavLink to='/movies' className={styles.link} activeClassName={styles.linkActive}>Movies</NavLink>
        </nav>
    )
}
export default Navigation;