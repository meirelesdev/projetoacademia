import axios from 'axios'
import { useRoute } from 'next/router'
import serverUrl from '../../../utils/env'

import Header from '../../../components/admin/Header'
import styles from '../../../components/admin/Add.module.css'
import Input from '../../../components/admin/Input'
import Button from '../../../components/Button'



export default function Training(props){
    

    const handleFormData = async (event)=>{
        event.preventDefault()          
        let  formulario = new FormData(event.target)

            await axios.put(`${serverUrl}/admin/trainings/${props.trainings.id}`, formulario)
            .then((res)=>{
                alert("Alterações feitas com Sucesso!")
                window.location.href=("/admin")
            }).catch((err)=>{
                alert("Deu ruim")
            })
    }

    return (
        <Header textHeader="Editar Treinamento">
            <main className={styles.mainPosts}>
                    <div className={styles.viewEditPost}>
                       <h2>Editando o treinamento</h2>
                        <h3>{props.trainings.name_training}</h3>
                        <div>{props.trainings.description}</div>
                        <div>{props.trainings.type_training}</div>
                        
                        
                    </div>
                    <form className={styles.formPost} onSubmit={handleFormData}>
                        <div className={styles.fieldsPost}>
                        <Input type="text" name="name_training"  label="Nome Completo"/>
                        <br/>
                        <Input type="text" name="type_training"  label="Tipo do treinamento"/>
                        <br/>
                        <Input type="text" name="description" label="Descreva o treinamento"  />
                        <br/>
                        </div>            
                        <Button text="Salvar Alterações"/>
                    </form>
            </main>
        </Header>
    )
}

Training.getInitialProps = async ({query}) =>{

    const { id } = query
    let trainings = []

    trainings = await axios.get(`${serverUrl}/admin/trainings/${id}`)

    return {
        "trainings": trainings.data,
        "id": id
    }
}