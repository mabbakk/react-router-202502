import { NavLink } from 'react-router-dom';
import styles from './MainNav.module.scss';

const MainNav = () => {

    const activateLink = ({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`;

    return (
        <nav className={styles.nav}>
            <NavLink
                className={activateLink}
                to='/'>
                Home
            </NavLink>
            <NavLink
                className={activateLink}
                to='/blog'>
                Blog
            </NavLink>
            <NavLink
                className={activateLink}
                to='/about'>
                About
            </NavLink>
        </nav>
    );
}

export default MainNav