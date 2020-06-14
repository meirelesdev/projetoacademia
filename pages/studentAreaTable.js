import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from 'next/head'
import axios from 'axios'
import serverUrl from '../utils/env'
import styles from '../components/Studentarea.module.css'
import { Cookies } from 'react-cookie'
import { useCookies } from 'react-cookie'
import { useState } from 'react'
import Logout from '../components/Logout'

export default function Studentareatable() {
    const [cookies, setCookie] = useCookies();
    const name = cookies.user
    const matId = cookies.mat_id
    const cookieTreinos = new Cookies()

    axios.get(`${serverUrl}/training/${matId}`)
        .then(
            (res) => {
                let treinos = res.data
                cookieTreinos.set('treinos', treinos)
            }
        ).catch(err => alert("Usuário não encontrado, tente novamente e se o problema persistir contate um administrador ", err))

    const treinos = cookies.treinos
    console.log(treinos)

    //const bla = teste.res
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
            <div className={styles.container}>
                <button onClick={logoutSystem}>Logout</button>
                <div className={styles.div_header}>
                    <h1>Olá, <b>{name}</b>!</h1>
                    <p>Segue o treino planejado para hoje:</p>
                </div>
                <table className={styles.table_disposal}>
                    <tr>
                        <th>Número do treino</th>
                        <th>Treino</th>
                    </tr>
                    {treinos.length > 0 ?
                        treinos.map((treino) => (
                            <tr>
                                <td>1</td>
                        <td>{treino.name_training}</td>
                            </tr>
                        ))

                        : <p>Sem usuarios cadastrados</p>}
                </table>
            </div>
            <Footer />
        </>
    )
}

