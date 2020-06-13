import CompImg from '../../components/CompImg'
import serverUrl from '../../utils/env'

export default function Post({ postData }) {
    

    return(
        <section>
            <div>Pagina do post individual</div>
                    <h2>{post.title}</h2>
                    <CompImg src={`${serverUrl}/${post.photo}`} />
                    <p>{post.body}</p>
            <aside >
                <CompImg src="assets/Images/img-banner-planos.jpg"/>
                <CompImg src="assets/Images/img-banner-planos.jpg"/>
            </aside>
        </section>
    )

}

export async function  getStaticProps( { params } ){
    
    try{
        res = await axios.get(`${serverUrl}/posts/${params.id}`)
    }catch(err){
        res.data = []
    }
    
    return { post: res.data }
}