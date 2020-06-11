import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import styles from '../components/Blog.module.css'
import CompImg from '../components/CompImg'
import Axios from 'axios'
import serverUrl from '../utils/env'

export default function  Blog({posts}) {
    
    const posts = props.posts

    return(
        <>
        <Header />
            <Banner fotoBanner="../assets/Images/banner-blog.jpg" titleBanner="Nosso Blog" />
            <main className={styles.container}>
                <p className={styles.callToAction}>
                    Esteja sempre bem informado sobre as novidades sobre saúde e nutrição que poderão lhe ajudar a conquistar o corpo que sempre sonhou nossas publicações são semanais confira
                </p>             
                <section className={styles.category} >
                    <h2>Saúde</h2>
                    <div className={styles.post}>
                        <CompImg src="assets/Images/triceps-hanold-min.jpg" />
                        <div className={styles.contentPost}>
                            <h3>Exercícios para quem tem diabetes</h3>
                            <p>Esteja sempre bem informado sobre as novidades sobre saúde e nutrição que poderão lhe ajudar a conquistar o corpo que sempre sonhou nossas publicações são semanais confira</p>
                        </div>
                    </div>
                    <div className={styles.post}>
                        <CompImg src="assets/Images/triceps-hanold-min.jpg" />
                        <div className={styles.contentPost}>
                            <h3>Exercícios para quem tem diabetes</h3>
                            <p>Esteja sempre bem informado sobre as novidades sobre saúde e nutrição que poderão lhe ajudar a conquistar o corpo que sempre sonhou nossas publicações são semanais confira</p>
                        </div>
                    </div>
                </section>
                <section className={styles.category} >
                    <h2>Fitness</h2>
                    <div className={styles.post}>
                        <CompImg src="assets/Images/triceps-hanold-min.jpg" />
                        <div className={styles.contentPost}>
                            <h3>Exercícios para quem tem diabetes</h3>
                            <p>Esteja sempre bem informado sobre as novidades sobre saúde e nutrição que poderão lhe ajudar a conquistar o corpo que sempre sonhou nossas publicações são semanais confira</p>
                        </div>
                    </div>
                    <div className={styles.post}>
                        <CompImg src="assets/Images/triceps-hanold-min.jpg" />
                        <div className={styles.contentPost}>
                            <h3>Exercícios para quem tem diabetes</h3>
                            <p>Esteja sempre bem informado sobre as novidades sobre saúde e nutrição que poderão lhe ajudar a conquistar o corpo que sempre sonhou nossas publicações são semanais confira</p>
                        </div>
                    </div>
                </section>
            </main>
            <aside>
                <CompImg />
                <CompImg />
            </aside>
        <Footer/>
        </>
    )
    
}
Blog.getStaticProps = async ctx => {
    let res = []

    res = await axios.get(`${serverUrl}/posts`)

    return { "posts" : res.data}
}