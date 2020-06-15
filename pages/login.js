import axios from 'axios'
import { useRouter } from 'next/router'
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


export default function Login() {

    const Router = useRouter()
    const cookies = new Cookies();
    const cookiesUser = new Cookies();
    const cookiesType = new Cookies();
    let [token, setToken] = useState(cookies.get('token') || null)

    const [values, setValues] = useState({ email: '', password: '' })
    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })

    }

    const handleLogin = async e => {
        e.preventDefault()
        await axios.post(`${serverUrl}/auths`, values)
            .then(
                (res) => {
                    cookies.remove('token')
                    cookies.remove('user')
                    cookies.remove('typet')
                    cookies.remove('name_training')
                    cookies.remove('description')
                    const { token } = res.data.token
                    const user = res.data.user["name"]
                    const typet = res.data.user["type_training"]
                    const isAdmin = res.data.user.isAdmin
                    cookies.set('token', token)
                    cookiesUser.set('user', user)
                    cookiesType.set('typet', typet)
                    switch (isAdmin) {
                        case 0:
                            axios.get(`${serverUrl}/trainings/${typet}`).then((res) => {
    
                                const description = res.data[0].description
                                const nametraining = res.data[0].name_training
                                const cookiesName = new Cookies();
                                cookiesName.set('name_training', nametraining)
                                const cookiesDesc = new Cookies();
                                cookiesName.set('description', description)
                            })
                            Router.push("/studentAreaTable")
                            // window.location.href = ("/studentAreaTable")
                            break;
                        case 1:
                            Router.push('/admin')
                            // window.location.href = ("/admin")//admin
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

            <Banner fotoBanner="/assets/Images/banner-blog.jpg" titleBanner="Login" />
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

            <Footer />
        </>
    )
}