import Head from 'next/head'
import Header from '../components/Header'
import App from 'next/app'
import Sectionblog from '../components/Sectionblog'


export default function Index() {
    return(
        <>
            <Header/>
            <Head />
                <h1>Bem Vindo ao projeto Hcodelab Fase 6</h1>
                <h2>Tema do projeto: Academia</h2>
            <Sectionblog />
        </>
    )
}