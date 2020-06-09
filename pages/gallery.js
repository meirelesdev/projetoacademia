import Photo from '../components/Photo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

// import axios from 'axios'

export default function Gallery(props) {
    return(
        <>
            <Header />
                <Banner fotoBanner="assets/Images/banner-gallery.jpg" titleBanner="Galeria de Fotos"/>
            <Footer />
        </>
    )
}
