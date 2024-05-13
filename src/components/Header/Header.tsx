import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.css';
import { faBell, faChevronDown, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.navbar}>
                <div className={styles.logoBox}>
                    <img src="/images/logo.png" alt="" />
                    <label>CozyCabins</label>
                </div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Trips <FontAwesomeIcon icon={faChevronDown} /></a></li>
                    <li><a href="">Approvals</a></li>
                    <li><a href="">Reports <FontAwesomeIcon icon={faChevronDown} /></a></li>
                    <li><a href="">Users</a></li>
                </ul>
            </div>
            <div className={styles.userBox}>
                <Link to="/help">Help <FontAwesomeIcon icon={faCircleQuestion} /></Link>
                <FontAwesomeIcon icon={faBell} />
                <Link to="/user" className={styles.userImg}>
                    EN
                </Link>
            </div>
        </header>
    )
}

export default Header;