import Head from 'next/head'
import Header from '../components/Header'
import App from 'next/app'
import Sectionblog from '../components/Sectionblog'
import Link from 'next/link'
import Footer from '../components/Footer'


export default function Index() {
    return(
        <>
            <Header/>
            <Head />
                
            <Sectionblog />
            <Footer/>
        </>
    )
}