import Head from 'next/head'
import styles from './Header.module.css'
import Link from 'next/link' 
import { useState } from 'react'
import Sidebar from '../components/Sidebar'

export default function Header () {

    const [sidebarShow, setSidebar] = useState(false)

    function toogleSidebar(e) {
        setSidebar(!sidebarShow)
    }

    return (
    <>
        <Head>
            <link rel="shortcut icon" href="/favicon.svg" />
            <title>Fitness Trainning</title>
        </Head>
        <header>
            <Link  href="/">
                <a>
                    <img className={styles["logo"]} srcSet="/assets/Logo/Fitness.svg" id="logo" alt="Logo" />
                </a>
            </Link>
            
            <div className={styles["headerfundo"]}>
                
                <Link href="/login" >
                    <a className={styles["btnlogin"]}>
                        <img srcSet="/assets/Icon/user.svg" id={styles.icon} />
                    </a>
                </Link>
                

                <ul className={styles["navbar"]} >
                    <li><Link href="/" ><a>Home</a></Link></li>
                    <li><Link href="/sobrenos" ><a>Sobre nós</a></Link></li>
                    <li><Link href="/gallery" ><a>Galeria</a></Link></li>
                    <li><Link href="/planos" ><a>Planos</a></Link></li>
                    <li><Link href="/blog" ><a>Blog</a></Link></li>
                    <li><Link href="/contact" ><a>Contato</a></Link></li>
                </ul>
            </div>

            <button onClick={toogleSidebar} className={styles["menu"]}><img srcSet="/assets/Icon/abrir.svg" id={styles.icon} /></button>

            <Sidebar show={sidebarShow} toogleSidebar={toogleSidebar}/>

        </header>
        </>
    )
}