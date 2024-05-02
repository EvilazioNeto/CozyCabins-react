import { Link } from 'react-router-dom';
import styles from './landingPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBoxOpen, faChevronDown, faEnvelope, faFire, faFish, faHeadset, faHorse, faHouse, faHouseChimney, faLocationDot, faMedal, faMountainSun, faMugHot, faPersonHiking, faPersonWalking, faPhoneFlip, faStar, faTemperatureArrowUp, faTv, faUtensils, faWifi, faWind } from '@fortawesome/free-solid-svg-icons';

function LandingPage() {
    return (
        <>
            <header className={styles.headerLandingPage}>
                <nav className={styles.navHeader}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href="#cabin_details">Cabanas</a>
                        </li>
                        <li>
                            <a href="#location">Localização</a>
                        </li>
                    </ul>
                    <div className={styles.containgerLogo}>
                        <img className={styles.logo} src="/images/logo.png" alt="" />
                        <h3>CozyCabins</h3>
                    </div>
                    <ul>
                        <li>
                            <a href="#footerLandingPage">Sobre</a>
                        </li>
                        <li>
                            <a href="#footerLandingPage">Contato</a>
                        </li>
                        <li>
                            <Link to="/login">Entrar</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.headerContent}>
                    <h1>CozyCabins</h1>
                    <p>Descubra um refúgio de serenidade entre as exuberantes paisagens do Rio Grande do Sul.
                        O CozyCabins é o seu portal para uma experiência única em cabanas rústicas,
                        onde o conforto encontra a natureza.
                    </p>
                </div>
                <div className={styles.verMais}>
                    <a href="#mainContent">
                        <p>Ver mais</p>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </a>
                </div>
            </header>
            <main id='mainContent' className={styles.mainLandingPage}>

                <section className={styles.section1}>
                    <img src="https://www.gramadohotels.com/data/Photos/OriginalPhoto/11434/1143428/1143428497/gramado-cabana-dos-pinheiros-photo-3.JPEG" alt="" />
                    <img src="https://pousadastop.com.br/photospousadas/cabana.paraiso/3.jpg" alt="" />
                    <img src="https://www.ecoflamegarden.com.br/cdn/shop/products/kit-puff-poltrona-com-apoio-lareira-externa-202051.jpg?v=1708112567" alt="" />
                    <img src="https://vistasdeanita.com.br/wp-content/uploads/2022/06/vistas-de-anita-cabana-8.jpg" alt="" />
                </section>

                <section className={styles.section2}>

                    <div className={styles.apresentacao}>
                        <h2>Bem-vindo à Natureza: Cabanas Acolhedoras para sua Fuga</h2>
                        <p>Desconecte-se da agitação da vida cotidiana e mergulhe na serenidade da natureza.
                            Nossas cabanas rústicas oferecem o refúgio perfeito para você relaxar,
                            recarregar e reconectar-se com o mundo natural ao seu redor
                        </p>
                    </div>

                    <div className={styles.caracteristicas}>
                        <p>
                            <FontAwesomeIcon icon={faFire} />
                            Lenha para lareira e fogueira
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faHouseChimney} />
                            Tranquilidade em cada detalhe
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faBoxOpen} />
                            Kit de boas vindas
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faMountainSun} />
                            Lindas paisagens
                        </p>
                    </div>

                    <div className={styles.amenities} id='cabin_details'>
                        <div className={styles.detailAmenities}>
                            <h3><FontAwesomeIcon icon={faMedal} /> Confira os amenities que temos nas cabanas</h3>
                            <div>
                                <p>
                                    SmartTV
                                    <FontAwesomeIcon icon={faTv} />
                                </p>
                                <p>
                                    Wifi
                                    <FontAwesomeIcon icon={faWifi} />
                                </p>
                                <p>
                                    Ar Condicionado
                                    <FontAwesomeIcon icon={faWind} />
                                </p>
                                <p>
                                    Aquecimento Central
                                    <FontAwesomeIcon icon={faTemperatureArrowUp} />
                                </p>
                                <p>
                                    Churrasqueira ao Ar Livre
                                    <FontAwesomeIcon icon={faUtensils} />
                                </p>
                                <p>
                                    Banheira de Hidromassagem
                                    <FontAwesomeIcon icon={faBath} />
                                </p>
                                <p>
                                    Geladeira
                                    <FontAwesomeIcon icon={faWind} />
                                </p>
                                <p>
                                    Café da manha incluso
                                    <FontAwesomeIcon icon={faMugHot} />
                                </p>
                            </div>
                        </div>
                        <img className={styles.fotoAmenities} src="https://www.bransonvacationcabins.com/vrp/rentals/accessible-wooded-retreat_cabin_150bww-4_1920w.jpg" alt="" />
                    </div>

                    <div className={styles.containerExperiencias}>
                        <div className={styles.slideExperiencia}>
                            <img className={styles.arrasteAqui} src="https://app.tisaude.com/c/site/11444_arraste%20(1).gif" alt="" />
                            <img className={styles.fotoExperiencias} src="/images/passeio.jpg" alt="" />
                            <img className={styles.fotoExperiencias} src="/images/trilha.jpg" alt="" />
                            <img className={styles.fotoExperiencias} src="/images/pesca_resized_resized.jpg" alt="" />
                            <img className={styles.fotoExperiencias} src="/images/fogueira_resized.avif" alt="" />
                        </div>
                        <div className={styles.detailExperiencias}>
                            <h3><FontAwesomeIcon icon={faMedal} /> Experiências da Hospedagem</h3>
                            <div>
                                <p>
                                    Passeio a cavalo
                                    <FontAwesomeIcon icon={faHorse} />
                                </p>
                                <p>
                                    Pescar no lago
                                    <FontAwesomeIcon icon={faFish} />
                                </p>
                                <p>
                                    Fogueira ao ar livre
                                    <FontAwesomeIcon icon={faFire} />
                                </p>
                                <p>
                                    Escalada na montanha
                                    <FontAwesomeIcon icon={faPersonHiking} />
                                </p>
                                <p>
                                    Trilha na mata
                                    <FontAwesomeIcon icon={faPersonWalking} />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.section3} id='location'>
                    <div className={styles.localizacao}>
                        <h3>
                            <FontAwesomeIcon icon={faLocationDot} /> Localizadas no coração do Rio Grande do Sul,
                            as cabanas oferecem um refúgio tranquilo e acolhedor,
                            longe da agitação da cidade
                        </h3>
                        <p>Nosso grupo possui 10 encantadoras cabanas no Rio Grande do Sul,
                            cada uma projetada para proporcionar uma experiência única e relaxante.
                            Em meio à natureza exuberante do estado, nossas cabanas são o refúgio perfeito para quem busca tranquilidade.
                        </p>
                        <p>
                            Os usuários podem facilmente fazer suas reservas através do nosso site,
                            garantindo uma estadia memorável em um ambiente acolhedor e sereno.
                            Seja para uma escapada romântica ou uma aventura em família,
                            nossas cabanas oferecem conforto e privacidade,
                            permitindo que nossos hóspedes desfrutem verdadeiramente da beleza do sul do Brasil.
                        </p>
                        <button type='button'>
                            <Link to="/cadastrar-se">
                                Criar conta
                            </Link>
                        </button>
                    </div>
                    <div className={styles.mapa_container}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6903471.980705471!2d-56.93120341022735!3d-29.42826986679489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951f55c1493b3fb9%3A0x38ff6dc6da4039fe!2sCabana%20Alameda!5e0!3m2!1spt-BR!2sbr!4v1708910071740!5m2!1spt-BR!2sbr"
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </section>
                <section className={styles.section4}>
                    <div className={styles.containerAvaliacao}>
                        <div className={styles.avaliacao}>
                            <div className={styles.user}>
                                <h4>Leo Messi</h4>
                                <img src="/images/avaliacao/messi.jpg" alt="" />
                            </div>
                            <div className={styles.stars}>
                                <p>Avaliação:</p>
                                <div>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                            <p className={styles.texto}>A cabana 'Tranquilidade nas Montanhas' foi uma descoberta incrível! A vista panorâmica das montanhas ao redor era de tirar o fôlego, especialmente ao amanhecer, quando as cores do céu se misturavam com os picos nevados. A cabana em si era um refúgio acolhedor, com uma lareira que nos aqueceu nas noites mais frias. A decoração rústica combinava perfeitamente com o ambiente natural ao redor.</p>
                        </div>
                        <div className={styles.avaliacao}>
                            <div className={styles.user}>
                                <h4>Toni Kross</h4>
                                <img src="/images/avaliacao/toni.jpg" alt="" />
                            </div>
                            <div className={styles.stars}>
                                <p>Avaliação:</p>
                                <div>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                            <p className={styles.texto}>Minha estadia na cabana 'Refúgio à Beira do Lago' foi simplesmente maravilhosa! A localização à beira do lago proporcionou uma atmosfera serena e relaxante desde o momento em que chegamos. A cabana era charmosa e bem decorada, com toques que refletiam o ambiente natural ao redor. Poder sair pela porta dos fundos e estar praticamente com os pés na água do lago foi uma experiência única. Os anfitriões foram extremamente atenciosos.</p>
                        </div>
                        <div className={styles.avaliacao}>
                            <div className={styles.user}>
                                <h4>Arrascaeta</h4>
                                <img src="/images/avaliacao/Arrasca.webp" alt="" />
                            </div>
                            <div className={styles.stars}>
                                <p>Avaliação:</p>
                                <div>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                            <p className={styles.texto}>Meu fim de semana na cabana 'Retiro na Floresta Encantada' foi mágico! A sensação de estar completamente imersa na natureza, com árvores majestosas ao redor e trilhas deslumbrantes para explorar, foi revigorante. A cabana era aconchegante e convidativa, com grandes janelas que nos permitiam apreciar a vista da floresta a qualquer momento. A limpeza e organização eram impecáveis, o que contribuiu para uma estadia confortável.</p>
                        </div>
                        <div className={styles.avaliacao}>
                            <div className={styles.user}>
                                <h4>Gabriel B.</h4>
                                <img src="/images/avaliacao/gabigol.webp" alt="" />
                            </div>
                            <div className={styles.stars}>
                                <p>Avaliação:</p>
                                <div>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                            <p className={styles.texto}>
                                Meu retiro na cabana 'Refúgio da Serra Serrena'
                                foi exatamente o que eu precisava!
                                A localização remota nas montanhas proporcionou uma sensação de paz e serenidade que é difícil de encontrar em outro lugar.
                                A cabana em si era espaçosa e confortável, com uma varanda que oferecia vistas deslumbrantes das montanhas ao redor.
                                A decoração rústica combinava perfeitamente com o ambiente natural.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <footer id='footerLandingPage' className={styles.footerLandingPage}>
                <div className={styles.footerContainer}>
                    <div className={styles.containgerLogo}>
                        <img className={styles.logo} src="/images/logo.png" alt="" />
                        <h3>CozyCabins</h3>
                        <p>Explore o mundo encantador das nossas cabanas para uma experiência única de hospedagem.</p>
                    </div>
                    <div className={styles.contatos}>
                        <h2>Contatos</h2>
                        <label>
                            <Link to="/ouvidoria">
                                <FontAwesomeIcon icon={faHeadset} />
                                Ouvidoria
                            </Link>
                        </label>
                        <label>
                            <FontAwesomeIcon icon={faHouse} />
                            Rio Grande do Sul, RS
                        </label>
                        <label>
                            <FontAwesomeIcon icon={faEnvelope} />
                            cozycabins@gmail.com
                        </label>
                        <label>
                            <FontAwesomeIcon icon={faPhoneFlip} />
                            +55 79 99999-8888
                        </label>
                    </div>
                    <div className={styles.quickLinks}>
                        <h2>Quick links</h2>
                        <ul>
                            <li>About us</li>
                            <li>Our Services</li>
                            <li>Terms & Condicion</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className={styles.news}>
                        <h2>Newsletter</h2>
                        <p>Receba Novidades e Ofertas Exclusivas</p>
                        <div>
                            <input type="text" placeholder='Your Email' />
                            <button type='button'>ENVIAR</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default LandingPage;
