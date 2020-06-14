import Header from '../../../components/admin/Header'
import axios from 'axios'
import serverUrl from '../../../utils/env'
import styles from '../../../components/admin/Gallery.module.css'
import Button from  '../../../components/admin/Button'

export default function Gallery({gallery}){
    return(
        <>
            <Header  textHeader="Galeria" >
            <Button text="Adicionar Foto" action="Adicionar" model="gallery" />
                <div className={styles.galleryContent}>
                    <ul className={styles.headerGallery}>
                        <li>Imagem</li>
                        <li>Titulo da Imagem</li>
                        <li>Descrição da Imagem</li>
                        <li>Ações</li>
                    </ul>
                    
                    {gallery.length > 0 ? 
                    gallery.map((photo, index)=>(
                        <div className={styles.imgContent} key={index}>
                            <img src={`${serverUrl}/gallery/${photo.id}`} alt=""  />
                            <h4>{photo.title}</h4>
                            <p>{photo.description}</p>
                            <Button text="Editar" action="editar" id={photo.id} model="gallery" />
                            <Button text="Excluir" action="delete" id={photo.id} model="gallery" />
                        </div>
                        )): <div className={styles.imgContent}>Sem imagens no momento Clique no botao adicionar para adicionar Imagens</div>}
                </div>    
            </Header>
            
        </>
    )
}

Gallery.getInitialProps = async (ctx) =>{
    let gallery = []
        gallery = await axios.get(`${serverUrl}/gallery`)
    return {
        "gallery": gallery.data
    }
}