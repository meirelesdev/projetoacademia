import handleAuthSSR from '../../utils/auth'
import styles from '../../components/admin/Index.module.css'
import Header from '../../components/admin/Header'
import Footer from '../../components/admin/Footer'

export default function Index(props) {

    return (
        <>
        <Header />
        <div className={styles.content}>

        </div>
        <Footer />
        </>
    )

}

Index.getInitialProps = async (ctx) => {
    
    let res = await handleAuthSSR(ctx)
// console.log(res)
    return { "res" : res}
}