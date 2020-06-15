import Header from '../../../components/admin/Header'
import Input from '../../../components/admin/Input'
import Button from '../../../components/Button'
import styles from '../../../components/admin/Add.module.css'
import axios from 'axios'
import serverUrl from '../../../utils/env'
import { useRouter } from 'next/router'

const config = {
    header: "Content-Type: multipart/form-data"
}

export default function Add(){
    const Router = useRouter()

    const handleFormData = async e => {
            e.preventDefault()
          
        let  formulario = new FormData(e.target)

            await axios.post(`${serverUrl}/admin/gallery`, formulario, config)
            .then((res)=>{
                alert("Nova Imagem inserida no banco")
                Router.push("/admin/gallery")
            }).catch((err)=>{
                alert("Deu ruim")
            })
    }   

    return(
        
        <Header textHeader="Adicionar Foto na Galeria" >
    
            <form className={styles.form} onSubmit={handleFormData}>
                <h2>Cadastrar Foto</h2>
                <div className={styles.fields}>
                        <img src="" />
                    <Input type="file" name="file"  label="Nova Foto"/>
                    <Input type="text" name="title" label="Titulo"  />
                    <Input type="text" name="description" label="Descrição" />
                    
                </div>            
                <Button text="Salvar"/>
            </form>
        </Header>
    )
}