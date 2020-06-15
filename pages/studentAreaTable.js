import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from 'next/head'
import axios from 'axios'
import serverUrl from '../utils/env'
import styles from '../components/Studentarea.module.css'
import { useCookies } from 'react-cookie'
import Logout from '../components/Logout'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Studentareatable() {
    const Router = useRouter()
    const [cookies, setCookie] = useCookies();
    const name = cookies.user
    const typet = cookies.typet
    
    const nametreino = cookies.name_training
    const desctreino = cookies.description
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
                    <thead>
                    <tr>
                        <th>Nome do treino</th>
                        <th>Descrição</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{nametreino}</td>
                        <td>{desctreino}</td>
                    </tr>
                    </tbody>


                </table>

            </div>
            <Footer />
        </>
    )
}
