import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

export default function  Blog(props) {
    return(
        <>
        <Header />
            <Banner fotoBanner="assets/Images/banner-blog.jpg" titleBanner="Nosso Blog" />                
        <Footer/>
        </>
    )
    
}