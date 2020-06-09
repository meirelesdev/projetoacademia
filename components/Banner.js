import styles from './Banner.module.css'
import CompImg from './CompImg'

export default function Banner(props){
    return(
        <div className={styles.banner}>
                            
            <div className={styles.quadrado}></div>
            <h1>{props.titleBanner}</h1>
  
            <CompImg src={props.fotoBanner} alt="banner" id={styles.bannermaior} />
        </div>
    )
}