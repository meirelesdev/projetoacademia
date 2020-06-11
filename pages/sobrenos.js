import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

export default (props) => {
    return (
        <>
            <Header/>
                <Banner fotoBanner="assets/Images/bannersobrenos.jpg" titleBanner="Sobre nós" />
            <Footer/>
        </>
    )
}