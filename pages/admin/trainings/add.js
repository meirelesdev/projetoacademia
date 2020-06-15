import Header from '../../../components/admin/Header'
import Input from '../../../components/admin/Input'
import Button from '../../../components/Button'
import styles from '../../../components/admin/Add.module.css'
import { useState } from 'react'
import axios from 'axios'
import serverUrl from '../../../utils/env'



export default function Add() {

    const [values, setValues] = useState({ name_training: '', description: '', type_training: '' })

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
        console.log(value)
    }

    const handleRegister = e => {
        e.preventDefault()
        axios.post(`${serverUrl}/admin/training`, values)
            .then(res => {
                alert('treino cadastrado!')
            }).catch(err => alert("Deu ruim", err.message))
    }

    return (
    <Header textHeader="Adicionar Usuario" >

        <form className={styles.form} onSubmit={handleRegister}>
            <h2>Cadastro de Usuarios</h2>
            <div className={styles.fields}>

                <Input type="text" name="name_training" onChange={handleInputChange} onFocus={handleInputChange} label="Nome do treino" />
                <Input type="text" name="description" label="Descreva o treinamento" onChange={handleInputChange} onFocus={handleInputChange} />
                <Input type="text" name="type_training" label="Tipo do treinamento" onChange={handleInputChange} onFocus={handleInputChange} />

            </div>
            <Button text="Salvar" />
        </form>
    </Header>
    )
}