import Footer from '../components/Footer'
import Header from '../components/Header'
import Input from '../components/Input'
import styles from '../components/Studentarea.module.css'
import Head from 'next/head'
import Button from '../components/Button'
import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { Cookies } from 'react-cookie'

export default function Studentarea() {
    const cookies = new Cookies();
    const cookiesUser = new Cookies();
    
    let [token, setToken] = useState(cookies.get('token')|| null)

    const [values, setValues] = useState({email:'', password:''})
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
        
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        //console.log(values)
        axios.post('http://localhost:3333/auths', values)
            .then(
                (res) => {
                   // console.log(res)
                    const tokenData = res.data.token
                    const user = res.data.user["name"]
                    console.log(user)
                    const isAdmin = res.data.user.isAdmin
                    //console.log('isadmin ',isAdmin)
                    cookies.set('token', tokenData)
                    cookiesUser.set('user', user)
                    alert("Seja bem vindo! " + values.email)
                    switch(isAdmin){
                        case 1:
                            window.location.href = ("/studentAreaTable")
                            break;
                        case 0:
                            window.location.href = ("/")
                            break;
                        default:
                            alert('erro fatal')
                            break;
                    }
                    
                    
                }
            ).catch(err=> console.log("nao foi ", err.message))
        }
        return (
            <>
                <Head />
                <Header />
                <section>
                    <div className='formularioaluno'></div>
                    <form onSubmit={handleFormSubmit}>
                        <div className={styles.container}>
                            <div>
                                <div>
                                    <label htmlFor="email">E-mail</label>
                                    <Input type="email" name="email" id="email" className={styles.mid_input} onChange={handleInputChange}
                                        onFocus={handleInputChange} />

                                </div>
                                <div>
                                    <label htmlFor="password">Senha</label>
                                    <Input type="password" name="password" id="password" className={styles.mid_input} onChange={handleInputChange}
                                        onFocus={handleInputChange} />

                                </div>

                                <div>
                                    <Button text="Entrar" />
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                <Footer />
            </>
        )
    }