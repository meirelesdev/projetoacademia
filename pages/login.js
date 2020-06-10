import axios from 'axios'
import { useState } from 'react'
import { Cookies } from 'react-cookie'
import serverUrl from '../utils/env'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Input from '../components/Input'
import Button from '../components/Button'
import styles from '../components/Contact.module.css'

export default function Login(){

    const [values, setValues ] = useState({email: '', password:''})
    const cookies = new Cookies()

    let [token, setToken ]= useState(cookies.get('token') || null)

    const handleInputChange = e => {
        const { name, value }= e.target
        
        setValues({...values, [name]:value})
    }

    const handleLogin = e => {
        e.preventDefault()
        
        axios.post(`${serverUrl}/auths` , values)
        .then(
            (res)=>{
                const tokenData = res.data.token
                cookies.set('token', tokenData)
                console.log('Usúario Autenticado!')
                window.location.href=("/admin")

            }
        ).catch(err => {
            alert('Deu ruim', err.message)
        })
    }

    return(
        <>
            <Header />
            <Banner fotoBanner="assets/Images/banner-blog.jpg" />
                <form className={styles.form} onSubmit={handleLogin}>
                    <div className={styles.fields}>
                        <Input type="email" name="email" onChange={handleInputChange} onFocus={handleInputChange} label="Seu E-mail"/>
                        <Input type="password" name="password" label="Senha" onChange={handleInputChange} onFocus={handleInputChange}/>
                    </div>            
                    <Button text="Logar"/>
                </form>
            <Footer />
        </>
    )
}