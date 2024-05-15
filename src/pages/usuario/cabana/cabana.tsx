import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cabana } from "../../../interface/hospedagem";
import styles from './cabana.module.css';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Counter, Download, Fullscreen, Slideshow, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface CabanaProps {
    cabana: Cabana
}

function PaginaCabana({ cabana }: CabanaProps) {
    const [open, setOpen] = useState<boolean>(false);
    const [index, setIndex]= useState<number>(0)

    function handleImageClick(index: number){
        setOpen(true);
        setIndex(index)
    }
    
    return (
        <>
            <Lightbox 
                index={index}
                plugins={[Captions, Download, Fullscreen, Zoom, Slideshow, Counter, Thumbnails]}
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: `cabanas/thumbnail/${cabana.imagens.thumbnail}` },
                    ...cabana.imagens.secundarias.map((img) => (
                        { src: `cabanas/secundarias/${img}` }
                    ))
                ]} />

            <main className={styles.paginaCabanaContainer}>
                <article>
                    <div className={styles.apresentacaoCabinBox}>
                        <div>
                            <div className={styles.nomeBox}>
                                <h2>{cabana.nome}</h2>
                                <img src="images/stars.webp" alt="" />
                                <p>{cabana.avaliacao}/5</p>
                            </div>
                            <label className={styles.labelLocation}>
                                <FontAwesomeIcon icon={faLocationDot} />
                                {cabana.localizacao.local}
                            </label>
                        </div>
                        <div className={styles.priceBox}>
                            <div>
                                <h2><span>${cabana.preco}</span> ${cabana.preco - (((cabana.desconto_por_noite) / 100) * cabana.preco)}</h2>
                                <p>per night for 2 Rooms</p>
                            </div>
                            <button>Select Room</button>
                        </div>
                    </div>
                    <div className={styles.thumbnailGallery}>
                        <div className={styles.mainThumbnail}>
                            <img onClick={() => handleImageClick(0)} src={`cabanas/thumbnail/${cabana.imagens.thumbnail}`} alt="" />
                        </div>
                        <div className={styles.sidePhotos}>
                            {cabana.imagens.secundarias.map((img, i) => (
                                i < 6 &&
                                <img onClick={() => handleImageClick(i + 1)} key={i} src={`cabanas/secundarias/${img}`} alt="" />
                            ))}
                        </div>
                    </div>
                </article>
            </main>
        </>
    )
}

export default PaginaCabana;

