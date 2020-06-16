//import Header from '../components/Header'
//import Footer from '../components/Footer'
import styles from '../components/404.module.css'

export default function Custom404(){
    return(
        <>
            <div className={styles["page-error"]}>
                <img className={styles["img-error"]} srcSet="../assets/Images/img-page-erro-404.jpg" width="100%" alt="Erro de Página" title="Erro de Página" />
            </div>
        </>
    )
}