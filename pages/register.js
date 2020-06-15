import Header from '../components/Header'
import Footer from '../components/Footer'
import Input from '../components/Input'
import Button from '../components/Button'
import Banner from '../components/Banner'
import styles from '../components/Contact.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import serverUrl from '../utils/env'

export default function Register(props){
    const Router = useRouter()

    const [values, setValues ] = useState({name:'', email:'',password:'',isAdmin:'0', photo:'user.png'})

    const handleInputChange = e => {
        const { name, value }= e.target
        setValues({...values, [name]:value})
        console.log(value)
    }

    const handleRegister = e => {
        e.preventDefault()
        
        axios.post(`${serverUrl}/users`, values)
        .then( res => {
        alert(`Olá ${res.data.name} seus dados foram cadastrados ID: ${res.data.id}`)
        if(res.data.isadmin){
            Router.push('/admin')
        }
        Router.push("/")
            
        }).catch( err => alert("Deu ruim", err.message))
    }

    return(
        <>
        <Header />
            
                <Banner fotoBanner="assets/Images/banner-blog.jpg" titleBanner="Registre-se"  />
    
            <form className={styles.form} onSubmit={handleRegister}>
                <div className={styles.fields}>

                    <Input type="text" name="name" onChange={handleInputChange} required={true} onFocus={handleInputChange} label="Nome Completo"/>
                    <Input type="email" name="email" label="Email" required={true} onChange={handleInputChange}onFocus={handleInputChange} />
                    <Input type="password" name="password" label="Senha" required={true} onChange={handleInputChange} onFocus={handleInputChange}/>
                </div>            
                <Button text="Cadastrar-se"/>
            </form>
        <Footer />
        </>
    )
}