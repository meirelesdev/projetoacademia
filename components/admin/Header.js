import styles from './Header.module.css'
import Link from 'next/link'

export default function Header(){
    return(
        <header>
            <div className={styles.logo}>
                <img src="/assets/Logo/Fitness.svg" />
            </div>
            <nav>
                <Link href="">
                    <a>Usuarios</a>
                </Link>
                <Link href="">
                    <a>Posts</a>
                </Link>
                <Link href="">
                    <a>Planos</a>
                </Link>
            </nav>
        </header>
    )
}