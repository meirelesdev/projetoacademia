import Head from 'next/head'
import styles from './Header.module.css'
import Link from 'next/link'
import { Cookies } from 'react-cookie'
import { useRouter } from 'next/router'


export default function Header(props){
    const Router = useRouter()

    function logout(e) {
        const cookies = new Cookies()
        e.preventDefault()
        cookies.remove('token')
        cookies.remove('user')
        cookies.remove('typet')
        Router.push('/')
    }
    
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
                    <Link href="/admin/trainings">
                        <a>Treinamentos</a>
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
                <a onClick={logout} title="Sair" className={styles.logOut}><img srcSet="/assets/Icon/icon-logout.svg"/></a>
                
            </header>
            <div className={styles.mainAdmin}>
                    <p>Ola, {props.userName ? props.userName: "Indefinido"}!</p>
                    <h1>{props.textHeader}</h1>
                    <hr/>
                    
                    {props.children}

            </div>
               
    </section>
    )
}