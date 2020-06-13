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

export default function Login() {

    const cookies = new Cookies();
    const cookiesUser = new Cookies();

    let [token, setToken] = useState(cookies.get('token') || null)

    const [values, setValues] = useState({ email: '', password: '' })
    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })

    }

    const handleLogin = e => {
        e.preventDefault()
        axios.post(`${serverUrl}/auths`, values)
            .then(
                (res) => {
                    const tokenData = res.data.token
                    const user = res.data.user["name"]
                    const isAdmin = res.data.user.isAdmin
                    cookies.set('token', tokenData)
                    cookiesUser.set('user', user)
                    switch (isAdmin) {
                        case 0:
                            window.location.href = ("/studentAreaTable")
                            break;
                        case 1:
                            window.location.href = ("/admin")//admin
                            break;
                        default:
                            alert('erro fatal,contate um administrador')
                            break;
                    }


                }
            ).catch(err => alert("Usuário não encontrado, tente novamente e se o problema persistir contate um administrador ", err))
    }

    return (
        <>
            <Header />
            <Banner fotoBanner="assets/Images/banner-blog.jpg" />
            <form className={styles.form} onSubmit={handleLogin}>
                <div className={styles.fields}>
                    <Input type="email" name="email" onChange={handleInputChange} onFocus={handleInputChange} label="Seu E-mail" />
                    <Input type="password" name="password" label="Senha" onChange={handleInputChange} onFocus={handleInputChange} />
                </div>
                <div>
                    <a href="/register">Registre-se</a>
                </div>
                <Button text="Logar" />
            </form>
            <Footer />
        </>
    )
}