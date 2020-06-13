import Header from '../../../components/admin/Header'
import Input from '../../../components/admin/Input'
import Button from '../../../components/Button'
import styles from '../../../components/admin/Add.module.css'
import { useState } from 'react'
import axios from 'axios'
import serverUrl from '../../../utils/env'



export default function Add(){
    
    const [values, setValues ] = useState({name:'', email:'',password:'', isAdmin:'', photo:'user.png'})

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
            window.location.href=('/admin/users')
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
                </div>            
                <Button text="Salvar"/>
            </form>
        </Header>
    )
}