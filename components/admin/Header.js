import Head from 'next/head'
import App from 'next/app'
import styles from './Header.module.css'
import Button from './Button'
import Link from 'next/link'


export default function Header(props){
    
    return(
        
        <section  className={styles.containerAdmin}>
            <Head > </Head>
            <header className={styles.mainHeader}>
                <div className={styles.logoAdmin}>
                    <Link href="/admin">
                        <a>
                            <img srcSet="/assets/Logo/Fitness.svg"/>
                        </a>
                    </Link>
                </div>
                
                <nav className={styles.navMenu}>
                    
                    <p>Gerenciar</p>
                    <Link href="/admin/contacts">
                        <a>Contatos</a>
                    </Link>
                    <Link href="/admin/users">
                        <a>Usuarios</a>
                    </Link>
                    <Link href="/admin/posts">
                        <a>Posts</a>
                    </Link>
                    <Link href="/admin/gallery">
                        <a>Galeria</a>
                    </Link>
                </nav>
                <nav className={styles.navMobile}>                    
                    <p><img srcSet="/assets/Icon/icon-maneger.svg" /></p>
                    <Link href="/admin/contacts">
                        <a title="Contatos"><img srcSet="/assets/Icon/icon-contacts.svg"/></a>
                    </Link>
                    <Link href="/admin/users">
                    <a title="Usuarios"><img srcSet="/assets/Icon/icon-users.svg"/></a>
                    </Link>
                    <Link href="/admin/posts">
                    <a title="Posts"><img srcSet="/assets/Icon/icon-posts.svg"/></a>
                    </Link>
                    <Link href="/admin/gallery">
                    <a  title="Galleria"><img srcSet="/assets/Icon/icon-gallery.svg"/></a>
                    </Link>
                </nav>
                <Link href="/">
                    <a  title="Sair" className={styles.logOut}><img srcSet="/assets/Icon/icon-logout.svg"/></a>
                </Link>
                
            </header>
            <div className={styles.mainAdmin}>
                    <p>Ola, {props.userName ? props.userName: "Admin"}!</p>
                    <h1>{props.textHeader}</h1>
                    <hr/>
                    
                    {props.children}

            </div>
               
    </section>
    )
}