import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from 'next/head'


export default function Studentarea() {
    return (
        <>
            <Header />
            <Head />

            <section>
                <div className='formularioaluno'></div>
                <form>
                    <div>
                        <div>
                            <div>
                                <input type="email" name="email" id="email" />
                                <label htmlFor="email">E-mail</label>
                            </div>
                            <div>
                                <input type="password" name="password" id="password" />
                                <label htmlFor="password">Senha</label>
                            </div>
                        </div>
                        <div className='botaoenviar'>
                            <button type="submit">Entrar</button>
                            <a href="#">Esqueci a senha</a>
                        </div>
                    </div>
                </form>
            </section>

            <Footer />
        </>
    )
}