import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react' 
import serverUrl from '../../../utils/env'
import Header from '../../../components/admin/Header'
import styles from '../../../components/admin/Add.module.css'
import Input from '../../../components/admin/Input'
import Button from '../../../components/Button'

const config = {
    header: "Content-Type: multipart/form-data"
}

export default function Photo(props){
    const Router = useRouter()

    const handleFormData = async (event)=>{
        event.preventDefault()
          
        let  formulario = new FormData(event.target)

            await axios.put(`${serverUrl}/admin/gallery/${props.photo.id}`, formulario, config)
            .then((res)=>{
                alert("Alterações feitas com Sucesso!")
                Router.push("/admin/gallery")
            }).catch((err)=>{
                alert("Deu ruim")
            })
    }

    return (
        <Header textHeader="Editando foto da galeria">
            <main className={styles.mainPosts}>
                    <div className={styles.viewEditPost}>
                        <img srcSet={`${serverUrl}/gallery/${props.photo.id}`} />
                        <h3>{props.photo.title}</h3>
                        <div>{props.photo.description}</div>
                    </div>
                    <form className={styles.formPost} onSubmit={handleFormData}>
                        <h2>Editando Photo com id: {props.photo.id}</h2>
                        <div className={styles.fieldsPost}>
                            <Input type="file" name="file" required  label="Nova Imagem"/>
                            <br/>
                            <Input type="text" name="title" label="Titulo da Foto"  />
                            <br/>
                            <Input type="text" name="description" label="Descrição"  />
                            <br/>
                        </div>            
                        <Button text="Salvar Alterações"/>
                    </form>
            </main>
        </Header>
    )
}

Photo.getInitialProps = async ({query}) =>{

    const { id } = query
    let photo = []

    photo = await axios.get(`${serverUrl}/admin/gallery/${id}`)

    return {
        "photo": photo.data,
        "id": id
    }
}