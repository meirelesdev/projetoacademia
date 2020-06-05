import styles from './Header.module.css'
import Link from 'next/link' 

export default () => {
    return (
        <>
            <Link  href="/">
                <a>
                    <img className={styles["logo"]} src="assets/Logo/Fitness.svg" id="logo" alt="Logo" />
                </a>
            </Link>
            
            <div className={styles["headerfundo"]}>
                
                <Link href="/" >
                    <a className={styles["btnlogin"]}>
                        <img src="assets/Icon/user.svg" id={styles["icon"]} />
                    </a>
                </Link>

                <ul className={styles["navbar"]} >
                    <li><Link href="/" ><a>Home</a></Link></li>
                    <li><Link href="/" ><a>Sobre nós</a></Link></li>
                    <li><Link href="/" ><a>Galeria</a></Link></li>
                    <li><Link href="/" ><a>Planos</a></Link></li>
                    <li><Link href="/" ><a>Corporativo</a></Link></li>
                    <li><Link href="/" ><a>Contato</a></Link></li>
                </ul>

            </div><a></a>
        </>
    )
}