import Header from '../../../components/admin/Header'
import Input from '../../../components/admin/Input'
import Button from '../../../components/Button'
import styles from '../../../components/admin/Add.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import serverUrl from '../../../utils/env'



export default function Add({ training}){
    const Router = useRouter()
    const [values, setValues ] = useState({name:'', email:'',password:'', isAdmin:'', photo:'user.png', type_training:''})

    const handleInputChange = e => {
        const { name, value }= e.target
        setValues({...values, [name]:value})
        console.log(value)
    }

    const handleRegister = async e => {
        e.preventDefault()
        
        const user = await axios.post(`${serverUrl}/users`, values)
        if(user.data){
            alert(`Usuario ${user.data.name} Salvo com sucesso`)
            Router.push('/admin/users')
        }
    }
    return(
        
        <Header textHeader="Adicionar Usuario" >
    
            <form className={styles.form} onSubmit={handleRegister}>
                <h2>Cadastro de Usuarios</h2>
                <div className={styles.fields}>

                    <Input type="text" name="name" onChange={handleInputChange} onFocus={handleInputChange} label="Nome Completo"/>
                    <Input type="email" name="email" label="Email" onChange={handleInputChange}onFocus={handleInputChange} />
                    <Input type="password" name="password" label="Senha" onChange={handleInputChange} onFocus={handleInputChange}/>
                    <Input type="number"min="0" max="1" onChange={handleInputChange} onFocus={handleInputChange}  name="isAdmin" label="Administrativo?"/>
                    <Input type="text" min="0" max="1" onChange={handleInputChange} onFocus={handleInputChange}  name="isAdmin" label="Administrativo?"/>
                    <select name="type_training" label="Tipo do treino">
                            {training.length > 0 ? 
                training.map((trainings, index)=>(
                <option key={index} value={trainings.type_training}>{trainings.type_training}</option>
                    ))
                    
            : <p>Sem treinamentos cadastrados</p>}
                        </select>
                
                </div>            
                <Button text="Salvar"/>
            </form>
        </Header>
    )
}

Add.getInitialProps = async ( ctx) =>{

    let training = []

    training = await axios.get(`${serverUrl}/training`)
    return {
        "training": training.data
    }
}