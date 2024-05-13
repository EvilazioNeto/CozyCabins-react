import Filtros from '../../../components/Filtros/Filtros';
import styles from './home.module.css';
import cabanasData from '../../../data/db.json';
import { useState } from 'react';
import { Cabana } from '../../../interface/hospedagem';
import CardCabana from '../../../components/Card/Cabana/Cabana';

function Home() {
    const [cabanasDB, setCabanasDB] = useState<Cabana[]>(cabanasData.cabanas);
    const [corBtn, setCorBtn] = useState<string>('recomendacao');

    function filtroPorAvaliacao(tipoFiltro: string) {
        if(tipoFiltro === "avaliacao"){
            const cabanasFiltradas = cabanasDB.sort(function (a, b) {
                if (a.avaliacao < b.avaliacao) {
                    return 1;
                }
                if (a.avaliacao > b.avaliacao) {
                    return -1;
                }
                return 0;
            })
            setCabanasDB([...cabanasFiltradas]);
            setCorBtn('avaliacao');
        }else if(tipoFiltro === "valor"){
            const cabanasFiltradas = cabanasDB.sort(function (a, b) {
                if (a.preco > b.preco) {
                    return 1;
                }
                if (a.preco < b.preco) {
                    return -1;
                }
                return 0;
            })
            setCabanasDB([...cabanasFiltradas]);
            setCorBtn('valor');
        }else if(tipoFiltro === "recomendacao"){
            const cabanasFiltradas = cabanasDB.sort(function (a, b) {
                if (a.avaliacao < b.avaliacao) {
                    return 1;
                }
                if (a.avaliacao > b.avaliacao) {
                    return -1;
                }
                return 0;
            })
            setCabanasDB([...cabanasFiltradas]);
            setCorBtn('recomendacao');
        }
    }

    return (
        <main className={styles.mainHome}>
            <article>
                <Filtros />
                <div className={styles.cabanasContainer}>
                    <h1>Nossas Cabanas no Rio Grande do Sul</h1>
                    <div className={styles.filterRatingBox}>
                        <button className={corBtn === "recomendacao" ? styles.selecionado : ''} onClick={() => filtroPorAvaliacao("recomendacao")}>Recomendação</button>
                        <button className={corBtn === "valor" ? styles.selecionado : ''} onClick={() => filtroPorAvaliacao("valor")}>Preço</button>
                        <button className={corBtn === "avaliacao" ? styles.selecionado : ''} onClick={() => filtroPorAvaliacao("avaliacao")}>Avaliação</button>
                    </div>
                    <div className={styles.cabanasCardBox}>
                        {cabanasDB.map((cabana) => (
                            <CardCabana key={cabana.id} cabana={cabana} />
                        ))}
                    </div>
                </div>
            </article>
        </main>
    )
}

export default Home;
