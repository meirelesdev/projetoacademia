import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../components/Studentarea.module.css'
import Head from 'next/head'


export default function Studentarea() {
    return (
        <>
            <Header />
            <Head />
            <section>
                <div className='formularioaluno'></div>
                <form>
                    <div className={styles.container}>
                        <div>
                            <div>
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" id="email" className={styles.mid_input} />

                            </div>
                            <div>
                                <label htmlFor="password">Senha</label>
                                <input type="password" name="password" id="password" className={styles.mid_input} />

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