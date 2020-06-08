import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from 'next/head'
import styles from '../components/Studentarea.module.css'

export default function Studentareatable() {
    return (
        <>
            <Header />
            <Head />
            <a href="voltar">Voltar</a>
            <ul>
                <li>Id do aluno: I92031</li>
                <li>Nome do Aluno: Igor Henrique Mondoni</li>
                <li>Plano: Semestral B</li>
            </ul>
            <table>
                <tr>
                    <th>ID do treino</th>
                    <th>Treino</th>
                    <th>Séries</th>
                    <th>Repetições</th>
                    <th>Descanso</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <a href="">Enviar por e-mail</a>
            <Footer />
        </>
    )
}