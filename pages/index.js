import Head from 'next/head'
import App from 'next/app'

import Sectionblog from '../components/Sectionblog'

export default function Index() {
    return(
        <>
            <Head />
            <h1>Bem Vindo ao projeto Hcodelab Fase 6</h1>
            <h2>Tema do projeto: Academia</h2>
            <Sectionblog />
        </>
    )
}