import axios from 'axios'
import { useRoute } from 'next/router'
import serverUrl from '../../../utils/env'
import Header from '../../../components/admin/Header'
import styles from '../../../components/admin/Add.module.css'
import Input from '../../../components/admin/Input'
import Button from '../../../components/Button'

const config = {
    header: "Content-Type: multipart/form-data"
}

export default function User(props){
    
    const Router = useRoute()
    const handleFormData = async (event)=>{
        event.preventDefault()          
        let  formulario = new FormData(event.target)

            await axios.put(`${serverUrl}/admin/users/${props.user.id}`, formulario, config)
            .then((res)=>{
                alert("Alterações feitas com Sucesso!")
                Router.push("/admin/users")
            }).catch((err)=>{
                alert("Deu ruim")
                Router.push('/admin/users')
            })
    }

    return (
        <Header textHeader="Editar Usuario">
            <main className={styles.mainPosts}>
                    <div className={styles.viewEditPost}>
                       <h2>Editando o Usuario</h2>
                        <h3>{props.user.name}</h3>
                        <div>{props.user.email}</div>
                        <p>{props.user.isAdmin? "Administrador": "Aluno"}</p>
                        
                    </div>
                    <form className={styles.formPost} onSubmit={handleFormData}>
                        <div className={styles.fieldsPost}>
                        <Input type="text" name="name"  label="Nome Completo"/>
                        <br/>
                        <Input type="email" name="email" label="E-mail"  />
                        <br/>
                        <Input type="number" min="0" max="1" name="isAdmin" label="Administrador?"  />
                        <br/>
                        <select name="type_training" label="Tipo do treino">
                            {props.training.length > 0 ? 
                props.training.map((trainings, index)=>(
                <option key={index} value={trainings.type_training}>{trainings.type_training}</option>
                    ))
                    
            : <p>Sem treinamentos cadastrados</p>}
                        </select>
                        <br/>
                        </div>            
                        <Button text="Salvar Alterações"/>
                    </form>
            </main>
        </Header>
    )
}

User.getInitialProps = async ({query}) =>{

    const { id } = query
    let user = []
    let training = []
    user = await axios.get(`${serverUrl}/admin/users/${id}`)
    training = await axios.get(`${serverUrl}/training`)
    return {
        "user": user.data,
        "training": training.data,
        "id": id
    }
}