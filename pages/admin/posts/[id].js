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

export default function Posts(props){
    const Router = useRouter()

    const handleFormData = async (event)=>{
        event.preventDefault()
          
        let  formulario = new FormData(event.target)

            await axios.put(`${serverUrl}/admin/posts/${props.post.id}`, formulario, config)
            .then((res)=>{
                alert("Alterações feitas com Sucesso!")
                Router.push("/admin/posts")
            }).catch((err)=>{
                alert("Deu ruim")
            })
    }

    return (
        <Header textHeader="Editar Post">
            <main className={styles.mainPosts}>
                    <div className={styles.viewEditPost}>
                        <img srcSet={`${serverUrl}/posts/${props.post.id}/photo`} />
                        <h3>{props.post.title}</h3>
                        <div>{props.post.category}</div>
                        <p>{props.post.body}</p>
                    </div>
                    <form className={styles.formPost} onSubmit={handleFormData}>
                        <h2>Editando Post id: {props.post.id}</h2>
                        <div className={styles.fieldsPost}>
                        <Input type="file" name="file" required  label="Imagem do post"/>
                        <br/>
                        <Input type="text" name="title" label="Titulo do posts"  />
                        <br/>
                        <Input type="text" name="category" label="Categoria"  />
                        <br/>
                        <label>Post</label>
                        <textarea type="text" name="body" row="40" cols="33" label="Post" ></textarea>
                        </div>            
                        <Button text="Postar Agora"/>
                    </form>
            </main>
        </Header>
    )
}

Posts.getInitialProps = async ({query}) =>{

    const { id } = query
    let post = []

    post = await axios.get(`${serverUrl}/posts/${id}`)

    return {
        "post": post.data,
        "id": id
    }
}