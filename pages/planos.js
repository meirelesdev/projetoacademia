import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import Banner from '../components/Banner'
import Planos from '../components/Planos'


export default () => {
    return (
        <>
            <Header/>
                <Banner fotoBanner="assets/Images/bannerplanos.png" titleBanner="Tabela de Planos:" />       
                <Planos />
            <Footer/>
        </>
    )
}