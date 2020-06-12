import styles from './Header.module.css'
import Link from 'next/link'

export default function Header(props){
    return(
    
        <section  className={styles.containerAdmin}>
            <header className={styles.mainHeader}>
                <div className={styles.logoAdmin}>
                    <Link href="/admin">
                        <a>
                            <img src="../assets/Logo/Fitness.svg"/>
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
                    <p><img src="../assets/Icon/icon-maneger.svg" /></p>
                    <Link href="/admin/contacts">
                        <a title="Contatos"><img src="../assets/Icon/icon-contacts.svg"/></a>
                    </Link>
                    <Link href="/admin/users">
                    <a title="Usuarios"><img src="../assets/Icon/icon-users.svg"/></a>
                    </Link>
                    <Link href="/admin/posts">
                    <a title="Posts"><img src="../assets/Icon/icon-posts.svg"/></a>
                    </Link>
                    <Link href="/admin/gallery">
                    <a  title="Galleria"><img src="../assets/Icon/icon-gallery.svg"/></a>
                    </Link>
                </nav>
                <Link href="/logout">
                    <a  title="Sair" className={styles.logOut}><img src="../assets/Icon/icon-logout.svg"/></a>
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