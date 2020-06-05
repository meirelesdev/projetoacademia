import Head from 'next/head'
import Header from '../components/Header'
import App from 'next/app'
import Sectionblog from '../components/Sectionblog'


export default function Index() {
    return(
        <>
            <Header/>
            <Head />
                
            <Sectionblog />
        </>
    )
}