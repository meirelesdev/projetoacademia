import Photo from '../components/Photo'
import Header from '../components/Header'
import axios from 'axios'

export default function Gallery(props) {
    return(
        <section>
            <Header />
            <Photo className="gallery-img"/>
        </section>
    )
}