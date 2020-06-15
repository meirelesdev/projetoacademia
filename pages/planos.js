import Header from '../components/Header'
import Footer from '../components/Footer'
import Planos from '../components/Planos'
import axios from 'axios'
import serverUrl from '../utils/env'

function PagePlanos(props) {
    return (
        <>
            <Header/>
                <Planos listaPlanos={ props.plans }/>
            <Footer/>
        </>
    )
}

PagePlanos.getInitialProps = async ctx => {
    const resp = await axios.get(serverUrl + '/plans')
    return { plans: resp.data }
}


export default PagePlanos