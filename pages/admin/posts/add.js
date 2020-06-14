import Header from '../../../components/admin/Header'
import Input from '../../../components/admin/Input'
import Button from '../../../components/Button'
import styles from '../../../components/admin/Add.module.css'
import axios from 'axios'
import serverUrl from '../../../utils/env'

const config = {
    header: "Content-Type: multipart/form-data"
}

export default function Add(){
 
     const handleFormData = async e => {
            e.preventDefault()
          
        let  formulario = new FormData(e.target)

            await axios.post(`${serverUrl}/admin/posts`, formulario, config)
            .then((res)=>{
                alert("Novo post salvo")
                window.location.href=("/admin/posts")
            }).catch((err)=>{
                alert("Deu ruim")
            })
    }   

    return(
        
        <Header textHeader="Novo Post" >
          
    
            <form className={styles.formPost} onSubmit={handleFormData}>
                <h2>Escrever novo Post</h2>
                <div className={styles.fieldsPost}>
                    <Input type="file"  name="file" required="true"  label="Imagem do post"/>
                    <br/>
                    <Input type="text"  name="title" label="Titulo do posts" />
                    <br/>
                    <Input type="text"  name = "category" label="Categoria"  />
                    <br/>
                    <label>Post</label>
                    <textarea type="text"  name="body" row="40" cols="33" label="Post" ></textarea>
                    
                </div>            
                <Button text="Postar Agora"/>
            </form>
        </Header>
    )
}