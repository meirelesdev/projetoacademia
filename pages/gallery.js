import Link from 'next/link'
import axios from 'axios'
import serverUrl from '../utils/env'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import CompImg from '../components/CompImg'
import styles from '../components/Gallery.module.css'

// import axios from 'axios'

export default function Gallery({ photos }) {

    return(
        <>
            <Header />
                    <Banner fotoBanner="assets/Images/banner-gallery.jpg" titleBanner="Galeria de Fotos"/>
                        <h2 className={styles.callToAction}>Confira o que a Fitness Training tem a lhe oferecer, Conheça um pouco da nossa estrutura, e equipamentos para fazer você elevar seu nível de treino.</h2>
                    <div className={styles.container} id="init">
                        {photos? 
                            photos.map(photo => (                            
                                <div className={styles.photo}  key={photo.id} >
                                    <CompImg alt={photo.title}  src={`${serverUrl}/gallery/${photo.id}`} />
                                    <a href={`#img${photo.id}`} className={styles.overlay}></a>
                               </div>
                            )) : <div className={styles.noPhoto}>Sem fotos no momento</div>
                        }
                        
                        {photos.map(photo =>(                            
                                <div className={styles.lightBox} id={`img${photo.id}`}  key={photo.id} >
                                    <div className={styles.boxImg}>
                                        <CompImg alt={photo.title}  src={`${serverUrl}/gallery/${photo.id}`} />                                        
                                        <div className={styles.infoPhoto}>
                                                <h3>{photo.title}</h3>
                                                <p>{photo.description}</p>
                                        </div>
                                        <a href={`#img${photo.id > 0?photo.id - 1: photo.length}`}  className={styles.btnPrev} id="prev">&lt;</a>
                                        <a href="#init" className={styles.btnClose} id="close">X</a>
                                        <a href={`#img${photo.id + 1}`}  className={styles.btnNext} id="next" >&gt;</a>
                                    </div>
                                </div>
                            ))
                        }       
                        
                    </div>

            <Footer />
        </>
    )
}
Gallery.getInitialProps = async (ctx)=>{

    let res = await axios.get(serverUrl + '/gallery')
        
    return { photos: res.data }
}