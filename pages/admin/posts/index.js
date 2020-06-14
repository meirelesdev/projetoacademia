import axios from 'axios'
import serverUrl from '../../../utils/env'
import Header from '../../../components/admin/Header'
import Button from '../../../components/admin/Button'
import styles from '../../../components/admin/Posts.module.css'

export default function Posts({posts}){
    return(
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
                    { posts.length > 0 ? 
                    posts.map((post, index)=>(
                            <div className={styles.imgContent}  key={index} >
                                <img src={`${serverUrl}/posts/${post.id}/photo`} />
                                <h4>{post.title}</h4>
                                <p>{post.body.substring(0,300)}</p>
                                <p>{post.category}</p>
                                <Button text="Editar" action="editar" id={post.id} model="posts" />
                                <Button text="Excluir" action="delete" id={post.id} model="posts" />
                            </div>)):<div className={styles.imgContent}>Sem posts no momento Clique no botao adicionar para Escrever um novo.</div>}
                </div>    
            </Header>
    )
}
Posts.getInitialProps = async (ctx) => {
    let posts = []

    posts = await axios.get(`${serverUrl}/posts`)

    return { "posts": posts.data}

}