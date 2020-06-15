import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from 'next/head'
import axios from 'axios'
import serverUrl from '../utils/env'
import styles from '../components/Studentarea.module.css'
import { useCookies } from 'react-cookie'
import Logout from '../components/Logout'

export default function Studentareatable({trainings}) {
    const [cookies, setCookie] = useCookies();
    const name = cookies.user
    const typet = cookies.typet

    console.log(treinos)

    //const bla = teste.res
    return (
        <>
            <Header />
            <Head />
            <div className={styles.container}>
                <div className={styles.div_header}>
                    <h1>Olá, <b>{name}</b>!</h1>
                    <p>Segue o treino planejado para hoje:</p>
                </div>
                <table className={styles.table_disposal}>
                    <tr>
                        <th>Número do treino</th>
                        <th>Treino</th>
                    </tr>
    <tr>{trainings.name_training}</tr>
    <tr>{trainings.description}</tr>
                    
                </table>
            </div>
            <Footer />
        </>
    )
}

Studentareatable.getInitialProps = async (ctx) => {
    let trainings = []

    trainings = await axios.get(`${serverUrl}/training`)

    return { "training": trainings.data}

}