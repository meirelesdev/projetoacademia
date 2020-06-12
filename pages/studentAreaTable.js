import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from 'next/head'
import styles from '../components/Studentarea.module.css'
import { useCookies } from 'react-cookie'
import Logout from '../components/Logout'

export default function Studentareatable() {
    const [cookies, setCookie] = useCookies();
    const name = cookies.user
    return (
        <>
            <Header />
            <Head />
            <Logout />
            <div className={ styles.container}>
            <a href="voltar">Voltar</a>
            <ul>
                <li>Nome do aluno: {name}</li>
                <li></li>
                <li>Plano: Semestral B</li>
            </ul>
            <table className={ styles.table_disposal}>
                <tr>
                    <th>ID do treino</th>
                    <th>Treino</th>
                    <th>Séries</th>
                    <th>Repetições</th>
                    <th>Descanso</th>
                </tr>
                <tr>
                    <td>1239</td>
                    <td>teste 1</td>
                    <td>blabla 2</td>
                    <td>trosco 3</td>
                    <td>mascatasr 4</td>
                </tr>
            </table>
            </div>
            <Footer />
        </>
    )
}
