import Header from '../../../components/admin/Header'
import Button from '../../../components/admin/Button'
import styles from '../../../components/admin/Posts.module.css'

export default function Posts(props){
    return(
        <>
            <Header  textHeader="Posts">
            <Button text="Adicionar"/>
                <div className={styles.postsContent}>
                    <ul className={styles.headerPosts}>
                        <li>Post Imagem</li>
                        <li>Titulo</li>
                        <li>Conteudo</li>
                        <li>Ações</li>
                    </ul>
                    <div className={styles.imgContent}>
                        <img src="../assets/Images/blog1.jpg" alt=""/>
                        <h4>Titulo do post</h4>
                        <p>Conteudo do post</p>
                        <Button text="Editar"/>
                        <Button text="Excluir"/>
                    </div>
                </div>    
            </Header>
            
        </>
    )
}