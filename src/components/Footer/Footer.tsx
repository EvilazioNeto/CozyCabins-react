import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.css';
import { faEnvelope, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.networkBox}>
                <p>Get connected with us on social networks:</p>
                <div>
                    <img src="/images/facebook.png" alt="" />
                    <img src="/images/twitter.png" alt="" />
                    <img src="/images/instagram.png" alt="" />
                    <img src="/images/linkedin.png" alt="" />
                    <img src="/images/github.png" alt="" />
                </div>
            </div>
            <div className={styles.footerInfo}>
                <div>
                    <h2>CozyCabins</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adpising elit. Lorem ipsum dolor sit amet, consectetur adpising elit </p>
                </div>
                <div>
                    <h3>PRODUCTS</h3>
                    <ul>
                        <li>
                            <Link to="#">
                                Cabin
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                Chalé
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                Passeio
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                Trilha
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>USERFUL LINKS</h3>
                    <ul>
                        <li>
                            <Link to="#">
                                Your Account
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                Become an Affiliate
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                Shipping Rates
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                Help
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>CONTACT</h3>
                    <ul>
                        <li>
                            <Link to="#">
                                <FontAwesomeIcon icon={faHouse} /> Aracaju, SE 15548. BR
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <FontAwesomeIcon icon={faEnvelope} /> lorem@gmail.com
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <FontAwesomeIcon icon={faPhone} /> (79) 9 9754-1111
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <FontAwesomeIcon icon={faPhone} /> (79) 9 9754-1111
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyBox}>
                <p>©2020 Copyright <Link target='_blank' to="https://github.com/EvilazioNeto">Evilazio Neto</Link></p>
            </div>
        </footer>
    )
}

export default Footer;
