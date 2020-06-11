import axios from 'axios'
import serverUrl from '../utils/env'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import CompImg from '../components/CompImg'
import styles from '../components/Gallery.module.css'


export default function Gallery({ photos }) {

    return(
        <>
            <Header />
                    <Banner fotoBanner="assets/Images/banner-gallery.jpg" titleBanner="Galeria de Fotos"/>
                        <h2 className={styles.callToAction}>Confira o que a Fitness Training tem a lhe oferecer, Conheça um pouco da nossa estrutura, e equipamentos para fazer você elevar seu nível de treino.</h2>
                    <div className={styles.container} id="init">
                        
                        { photos.length >= 0 ? 
                            photos.map((photo, index) => (                            
                                <div className={styles.photo}  key={photo.id} >
                                    <CompImg alt={photo.title}  src={`${serverUrl}/gallery/${photo.id}`} />
                                    <a href={`#img${index}`} className={styles.overlay}></a>
                               </div>
                            )) : <div className={styles.noPhoto}>Sem fotos no momento</div>
                        }
                        {photos.map((photo, index) =>(                            
                                <div className={styles.lightBox} id={`img${index}`}  key={photo.id} >
                                    <div className={styles.boxImg}>
                                        <CompImg alt={photo.title}  src={`${serverUrl}/gallery/${photo.id}`} />                                        
                                        <div className={styles.infoPhoto}>
                                                <h3>{photo.title}</h3>
                                                <p>{photo.description}</p>
                                        </div>
                                        <a href={`#img${index == 0 ? photos.length - 1 : index - 1}`}  className={styles.btnPrev} id="prev">&lt;</a>
                                        <a href="#init" className={styles.btnClose} id="close">X</a>
                                        <a href={`#img${index == photos.length -1 ? 0 : index + 1}`}  className={styles.btnNext} id="next" >&gt;</a>
                                    </div>
                                </div>
                            ))
                        }       
                        
                    </div>

            <Footer />
        </>
    )
}

export async function  getStaticProps( ctx ){
    let res = {}
    try{
        res = await axios.get(`${serverUrl}/gallery`)    
    }catch(err){
         res.data =  [] 
    }  
    return { 
        props: {
            photos: res.data
        }
    }
}