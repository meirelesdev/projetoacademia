import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from 'next/head'
import styles from '../components/Studentarea.module.css'
import { useCookies } from 'react-cookie'
import Logout from '../components/Logout'

export default function Studentareatable() {
    const [cookies, setCookie] = useCookies();
    const name = cookies.user

    const logoutSystem = e => {
        const [cookies, setCookie] = useCookies();
        cookies.remove("user");
        cookies.remove("token");
        window.location.href = ("/")
    }
    return (
        <>
            <Header />
            <Head />
            <div className={ styles.container}>
            <button onClick={logoutSystem}>Logout</button>
           <div className={ styles.div_header}>
                <h1>Olá, <b>{name}</b>!</h1>
                <p>Segue o treino planejado para hoje:</p>
                </div>
            <table className={ styles.table_disposal}>
                <tr>
                    <th>Número do treino</th>
                    <th>Treino</th> 
                </tr>
                <tr>
                    <td>1</td>
                    <td>Supino vertical: 2 séries de 30 repetições com intervalos de 1:00</td>
                </tr>
            </table>
            </div>
            <Footer />
        </>
    )
}
