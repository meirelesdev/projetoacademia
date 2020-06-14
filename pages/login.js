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
import Link from 'next/link'


export default function Login(){

    const cookies = new Cookies();
    const cookiesUser = new Cookies();
    const cookiesId = new Cookies();
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
                    const id = res.data.user["mat_id"]
                    const isAdmin = res.data.user.isAdmin
                    cookies.set('token', tokenData)
                    cookiesUser.set('user', user)
                    cookiesId.set('mat_id', id)
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
<<<<<<< HEAD
        
=======
>>>>>>> 32f52033d692524ef050a3f360954f354ed60654
            <Banner fotoBanner="assets/Images/banner-blog.jpg" />
            <form className={styles.form} onSubmit={handleLogin}>
                <div className={styles.fields}>
                    <Input type="email" name="email" required={true} onChange={handleInputChange} onFocus={handleInputChange} label="Seu E-mail" />
                    <Input type="password" name="password" required={true} label="Senha" onChange={handleInputChange} onFocus={handleInputChange} />
                </div>
                <div>
                    <Link href="/register">
                        <a >Registre-se</a>
                    </Link>
                </div>
                <Button text="Logar" />
            </form>
<<<<<<< HEAD

=======
>>>>>>> 32f52033d692524ef050a3f360954f354ed60654
            <Footer />
        </>
    )
}