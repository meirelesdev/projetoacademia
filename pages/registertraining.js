import Header from '../components/Header'
import Footer from '../components/Footer'
import Input from '../components/Input'
import Button from '../components/Button'
import Banner from '../components/Banner'
import styles from '../components/Contact.module.css'
import { useState } from 'react'
import axios from 'axios'
import serverUrl from '../utils/env'


/*
*
*
* IGNORAR ESTE ARQUIVO POR MOMENTO
*
*
*
*
*
*
*
*
*/
export default function Registertraining(props) {
    
    const [values, setValues] = useState({ name_training: '', description: '', series: '', repetition: '', mat_id: '', interval: '' })
    
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
        <>
            <Header />

            <Banner fotoBanner="assets/Images/banner-blog.jpg" titleBanner="Registre-se" />

            <form className={styles.form} onSubmit={handleRegister}>
                <div className={styles.fields}>

                    <Input type="text" name="name_training" onChange={handleInputChange} onFocus={handleInputChange} label="Nome do treino" />
                    <Input type="text" name="description" label="Descrição" onChange={handleInputChange} onFocus={handleInputChange} />
                    <Input type="text" name="series" label="Series" onChange={handleInputChange} onFocus={handleInputChange} />
                    <Input type="text" name="repetition" onChange={handleInputChange} onFocus={handleInputChange} label="repetition" />
                    <Input type="text" name="interval" onChange={handleInputChange} onFocus={handleInputChange} label="interval" />
                </div>
                <Button text="Cadastrar" />
            </form>
            <Footer />
        </>
    )
}