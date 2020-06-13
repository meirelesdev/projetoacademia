import Header from '../../../components/admin/Header'
import axios from 'axios'
import serverUrl from '../../../utils/env'
import styles from '../../../components/admin/Contacts.module.css'
import Button from '../../../components/admin/Button'

export default function Contacts(props){
    return(
        <>
            <Header  textHeader="Contatos">
            
                <div className={styles.galleryContent}>
                    <ul className={styles.headerGallery}>
                        <li>Nome</li>
                        <li>E-mail</li>
                        <li>Mensagem</li>
                        <li>Ações</li>
                    </ul>
                    <div className={styles.imgContent}>
                        <img src="../assets/Images/blog1.jpg" alt=""/>
                        <h4>Titulo da imagem</h4>
                        <p>Descrição da imagem</p>
                        <Button text="Editar"/>
                        <Button text="Excluir"/>
                    </div>
                </div>  

            </Header>
            
        </>
    )
}
Contacts.getInitialProps = async (ctx) =>{
    let res
    try{
        res = await axios.get(`${serverUrl}/admin/contatcs`)
    }catch(err){
        res = []
    }

    return {
        props: res.data
    }
}
    