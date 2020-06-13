import axios from 'axios'
import serverUrl from '../../../utils/env'
import Header from '../../../components/admin/Header'
import Button from '../../../components/admin/Button'
import styles from '../../../components/admin/Posts.module.css'

export default function Posts({posts}){
    return(
        <>
            <Header  textHeader="Posts">
            <Button text="Criar Novo Post" action="Adicionar" model="posts" />
                <div className={styles.postsContent}>
                    <ul className={styles.headerPosts}>
                        <li>Post Imagem</li>
                        <li>Titulo</li>
                        <li>Conteudo</li>
                        <li>Categoria</li>
                        <li>Ações</li>
                    </ul>
                    {posts.map((post, index)=>(
                            <div className={styles.imgContent}>
                                <img src={`${serverUrl}/posts/${post.id}/photo`} alt="" key={index} />
                                <h4>{post.title}</h4>
                                <p>{post.body}</p>
                                <p>{post.category}</p>
                                <Button text="Editar" action="editar" />
                                <Button text="Excluir" action="delete"/>
                            </div>
                        ))}
                </div>    
            </Header>
            
        </>
    )
}
Posts.getInitialProps = async (ctx) => {
    let posts = []

    posts = await axios.get(`${serverUrl}/posts`)

    return { "posts": posts.data}

}