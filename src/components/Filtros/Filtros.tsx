import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Filtros.module.css';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import cabanasDB from '../../data/db.json';
import { Cabana } from '../../interface/hospedagem';
import { useState } from 'react';

function Filtros() {
    const cabanas: Cabana[] = cabanasDB.cabanas;
    const [abrirFiltro1, setAbrirFiltro1] = useState<boolean>(true);
    const [abrirFiltro2, setAbrirFiltro2] = useState<boolean>(true);
    const [abrirFiltro3, setAbrirFiltro3] = useState<boolean>(true);

    return (
        <div className={styles.filtrosBox}>
            <div className={styles.filterNameBox}>
                <p>Filters</p>
                <p>Reset All</p>
            </div>
            <div className={styles.inputSearchBox}>
                <input type="text" placeholder='Search by hotel name' />
            </div>
            <div className={styles.popularFiltersBox}>
                <div onClick={() => setAbrirFiltro1(!abrirFiltro1)}>
                    <p>Popular Filter</p>
                    {abrirFiltro1 ? (
                        <FontAwesomeIcon icon={faChevronUp} onClick={() => setAbrirFiltro1(!abrirFiltro1)} />
                    ) : (
                        <FontAwesomeIcon icon={faChevronDown} onClick={() => setAbrirFiltro1(!abrirFiltro1)} />
                    )}
                </div>
                {abrirFiltro1 && (
                    <div className={styles.inputsFilterBox}>
                        <label>
                            <input type="checkbox" />
                            Free Cancellation
                        </label>
                        <label>
                            <input type="checkbox" />
                            Pay at Hotel
                        </label>
                        <label>
                            <input type="checkbox" />
                            Corporate Fare
                        </label>
                        <label>
                            <input type="checkbox" />
                            Free Breakfast
                        </label>
                        <label>
                            <input type="checkbox" />
                            Free Wifi
                        </label>
                    </div>
                )}
            </div>
            <div className={styles.precoFiltroBox}>
                <div onClick={() => setAbrirFiltro2(!abrirFiltro2)}>
                    <p>Price Per Night</p>
                    {abrirFiltro2 ? (
                        <FontAwesomeIcon icon={faChevronUp} onClick={() => setAbrirFiltro2(!abrirFiltro2)} />
                    ) : (
                        <FontAwesomeIcon icon={faChevronDown} onClick={() => setAbrirFiltro2(!abrirFiltro2)} />
                    )}
                </div>
                {abrirFiltro2 && (
                    <>
                        <input type="range" />
                        <label>
                            <span>$0</span>
                            <span>$30000</span>
                        </label>
                    </>
                )}
            </div>
            <div className={styles.amenitiesBox}>
                <div onClick={() => setAbrirFiltro3(!abrirFiltro3)} >
                    <p>Amenities</p>
                    {abrirFiltro3 ? (
                        <FontAwesomeIcon icon={faChevronUp} onClick={() => setAbrirFiltro3(!abrirFiltro3)} />
                    ) : (
                        <FontAwesomeIcon icon={faChevronDown} onClick={() => setAbrirFiltro3(!abrirFiltro3)} />
                    )}
                </div>
                {abrirFiltro3 && (
                    <div>
                        {cabanas.map((cabana) => (
                            cabana.amenidades_populares.map((amenidades, i) => (
                                <label key={i}>
                                    <input key={i} type="checkbox" />
                                    {amenidades}
                                </label>
                            ))
                        ))}
                    </div>
                )}
            </div>
            <button className={styles.aplicarMudancas}>APPLY</button>
        </div>
    )
}

export default Filtros;
