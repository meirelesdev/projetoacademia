import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Button from '../components/Button'


export default function Studentarea() {
    return (
        <>
            <Head />
            <Header />

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
                            <Button text="Entrar"/>
                            <a href="#">Esqueci a senha</a>
                        </div>
                    </div>
                </form>
            </section>

            <Footer />
        </>
    )
}