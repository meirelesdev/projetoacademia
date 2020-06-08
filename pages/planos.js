import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import Planos from '../components/Planos'


export default () => {
    return (
        <>
            <Header/>            
                <Planos />
            <Footer/>
        </>
    )
}