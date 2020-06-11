import Header from '../components/Header'
import Footer from '../components/Footer'
import Planos from '../components/Planos'
import axios from 'axios'
import serverUrl from '../utils/env'

export async function getStaticProps() {

    const resp = await axios.get(serverUrl + '/plans')

    return {
        props: {
            listaPlanos: resp.data
        }
    }
}

function PagePlanos(props) {
    return (
        <>
            <Header/>
                <Planos listaPlanos={props.listaPlanos}/>
            <Footer/>
        </>
    )
}

export default PagePlanos