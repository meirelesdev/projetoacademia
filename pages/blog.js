import axios from 'axios'
import serverUrl from '../utils/env'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import styles from '../components/Blog.module.css'
import CompImg from '../components/CompImg'
import Link from 'next/link'


export default function  Blog({ posts }) {
        
    return(
        <>
        <Header />
            <Banner fotoBanner="../assets/Images/banner-blog.jpg" titleBanner="Nosso Blog" />
            <section className={styles.blogBody}>
            <main className={styles.container}>
                <p className={styles.callToAction}>
                    Esteja sempre bem informado sobre as novidades sobre saúde e nutrição que poderão lhe ajudar a conquistar o corpo que sempre sonhou nossas publicações são semanais confira
                </p>            
                
                {posts.length >= 0 ?     
                <section className={styles.category} >
                        { posts.map( (post , index) => (                       
                    
                        <div key={index} >
                        {index == 0 || posts[index-1].category != posts[index].category ? <h2>{post.category}</h2>: ''}
                        <div className={styles.post}>
                        <CompImg src={`${serverUrl}/posts/${post.id}/photo`} />
                            <div className={styles.contentPost}>
                                <Link href={`/posts/${post.id}/${post.slug}`} >
                                    <a><h3>{post.title}</h3></a>
                                </Link>
                                <p>{post.body.substring(0,300)}</p>
                            </div>
                        </div>
                        </div>
                        ))}
                    </section>
                        : <div>Sem posts no momentos</div>}
                
            </main>
            </section>
        <Footer/>
        </>
    )
    
}
export async function getStaticProps( ){
    let res = []
    try{
        res = await axios.get(`${serverUrl}/posts`)
    }catch(err){
        res.data = []
    }   
    return { 
        props :{
            posts: res.data
        }
    }
}