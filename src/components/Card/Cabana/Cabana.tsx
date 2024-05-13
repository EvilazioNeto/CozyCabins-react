import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cabana } from "../../../interface/hospedagem";
import styles from './Cabana.module.css';
import { faCheck, faLocationDot, faPumpSoap, faUtensils, faWifi } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface CabanaProps {
    cabana: Cabana
}

function CardCabana({ cabana }: CabanaProps) {
    return (
        <div className={styles.cabanaBox}>
            <Link to="/home">
                <img className={styles.thumbnail} src={`/cabanas/thumbnail/${cabana.imagens.thumbnail}`} alt="" />
                <div className={styles.infoCabana}>
                    <div className={styles.name_priceBox}>
                        <div>
                            <h2>{cabana.nome}</h2>
                            <img src="images/stars.webp" alt="" />
                        </div>
                        <div className={styles.priceBox}>
                            <h2><span>${cabana.preco}</span> ${cabana.preco - (((cabana.desconto_por_noite) / 100) * cabana.preco)}</h2>
                            <p>per night for 2 Rooms</p>
                        </div>
                    </div>
                    <div className={styles.infoLocationBox}>
                        <label htmlFor="">
                            <FontAwesomeIcon icon={faLocationDot} />
                            {cabana.localizacao.local}
                        </label>
                        <p>{cabana.localizacao.local_proximo}</p>
                    </div>
                    <div className={styles.avaliacaoBox}>
                        <p>{cabana.avaliacao}/5</p>
                        {cabana.pay_at_hotel && (
                            <label>
                                <FontAwesomeIcon icon={faCheck} /> Pay at Hotel
                            </label>

                        )}
                    </div>
                    <div className={styles.amenitiesBox}>
                        {cabana.amenidades.Basic.map((e, i) => (
                            e === "Wi-Fi" && (
                                <label key={i} htmlFor=""><FontAwesomeIcon icon={faWifi} /> {e}</label>
                            ) ||
                            e === "Café da manhã" && (
                                <label key={i} htmlFor=""><FontAwesomeIcon icon={faUtensils} /> {e}</label>
                            ) ||
                            e === "Produtos de higiene pessoal" && (
                                <label key={i} htmlFor=""><FontAwesomeIcon icon={faPumpSoap} /> {e}</label>
                            )
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardCabana;