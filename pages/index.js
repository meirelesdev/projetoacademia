import Header from '../components/Headerindex'
import App from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Banner from '../components/Banner'


export default function Index() {
    return(
        <>
            <Header/>
            <Banner fotoBanner="assets/Images/banner-home.jpg" home="home"  />

            <Head />
                
                <section>
                    {/* so para ficar vizualmente melhor */}
                </section>
            
            <Footer/>
        </>
    )
}