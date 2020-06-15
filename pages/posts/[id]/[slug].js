import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Banner from '../../../components/Banner'
import CompImg from '../../../components/CompImg'
import styles from '../../../components/Blog.module.css'
import serverUrl from '../../../utils/env'
import { useRouter } from 'next/router'
import Axios from 'axios'
import { useRef, useEffect } from 'react'

export default function Post(props) {

    const ref = useRef()
   useEffect(()=>{
       ref.current.innerHTML = props.post.body
   },[])

    return(
        <>
        <Header />
            <Banner fotoBanner="/assets/Images/banner-blog.jpg" titleBanner="Nosso Blog" />
                <section className={styles.postSingle}>
                    <div className={styles.thePost}>

                        <h2>{props.post.category}</h2>
                        <CompImg srcSet={`${serverUrl}/posts/${props.post.id}/photo`} />            
                            <h3>{props.post.title}</h3>
                            <p ref={ref}></p>
                    </div>
                <aside className={styles.adsBlog} >
                    <CompImg src="/assets/Images/img-banner-planos.jpg"/>
                    <CompImg src="/assets/Images/img-banner-planos.jpg"/>
                </aside>
            </section>

        <Footer />
        </>
    )
}
Post.getInitialProps = async ({query})=>{

    let { id } = query
    
    const post = await Axios.get(`${serverUrl}/posts/${id}`)
    return {
        "post": post.data,
        "id": id
    }
}