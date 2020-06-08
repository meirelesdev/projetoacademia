import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../components/Studentarea.module.css'
import Head from 'next/head'
import React, {useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
import { Cookies } from 'react-cookie'


export default function Studentarea() {
    return (
        <>
            <Header />
            <Head />
            <section>
                <div className='formularioaluno'></div>
                <form>
                    <div className={styles.container}>
                        <div className={styles.container_input}>
                            <div className={styles.mid_input}>
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" id="email" className={styles.input_student}/>

                            </div>
                            <div className={styles.mid_input}>
                                <label htmlFor="password">Senha</label>
                                <input type="password" name="password" id="password" className={styles.input_student}/>

                            </div>

                            <div>
                                <button className={styles.mid_input} type="submit">Entrar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}