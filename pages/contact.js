import Header from '../components/Header'
import Footer from '../components/Footer'
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import Button from '../components/Button'
import styles from '../components/Contact.module.css'
import Banner from '../components/Banner'
import serverUrl from '../utils/env'
import React, {useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'


/* Idéia da estrutura final
<Footer />
    Mapa Estático
    foto que vai ao lado - Estático
    Form = como um componente cheio de componentes
            label
            input
            textarea
            button
    
<Header />
*/
const initialState = {name: '', phone: '', email: '', message: ''}

export default function Contact() {
const Router = useRouter()

    const [values, setValues] = useState(initialState)

    const handleInputChange = e =>{
        const {name, value} = e.target

        setValues({...values, [name]:value})
    }

    const handleFormSubmit =  e =>{
        e.preventDefault()
        axios.post(`${serverUrl}/admin/contacts`, values)
        .then(res=> {
                  // console.log('Usuário autenticado!')
                alert('Sua mensagem foi enviada com Sucesso!')
               setValues(initialState)
               
            }
        ).catch(err => alert('Deu ruim', err.message))
    }



    return(
        <>
        <Header/>
        <Banner fotoBanner="assets/Images/banner-google-maps.jpg" titleBanner="Contato" />  
        <section className={styles.container}>
            
            <div className={styles.mainContact} >
                <div className={styles.imgContact} ></div>
                <div className={styles.mainForm}>
                    <div className={styles.titleContact} >
                        <h1>Para maiores informações entre em contato com nossa equipe de atendimento. Teremos prazer em atender você.</h1>
                    </div>
                    <form className={styles.form} onSubmit={handleFormSubmit}>
                        <div className={styles.fields}>
                            <Input type="text" name="name" value={values.name} label="Nome Completo" onChange={handleInputChange} onFocus={handleInputChange}/>
                            <Input type="email" name="email" label="Email" value={values.email} onChange={handleInputChange} onFocus={handleInputChange} />
                            <Input type="tel" name="phone" label="Celular" value={values.phone} onChange={handleInputChange} onFocus={handleInputChange} />
                        </div>
                        <Textarea name="message" label="Mensagem" value={values.message} onChange={handleInputChange} onFocus={handleInputChange} /> 
                        <Button text="Enviar"/>
                    </form>
                </div>
            </div>
            {/* Localização e Contato juntos */}
            <div className={styles.localContact}> 
                {/* Localização */}
                <div className={styles.local}>
                    {/* título Localização*/}
                    <div className={styles.localTitle}>
                        <h2>Nossa Localização</h2>
                        <p>Avenida José Versolato, 101 - Centro</p>
                        <p>São Bernardo do Campo - SP, CEP: 09750-730</p>
                    </div> 
                    {/* mapa */}

                    <div className={styles.mapposition}>
                        <div className={styles.map}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1826.7852011438006!2d-46.550695142056014!3d-23.69131633999103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4235e0bc7d9b%3A0x1b7b6701e525d0fe!2sR.%20Jos%C3%A9%20Versolato%2C%20101%20-%20Centro%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009750-730!5e0!3m2!1spt-BR!2sbr!4v1591667152112!5m2!1spt-BR!2sbr" width="100%" height="100%" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
                {/* Contato */}
                <div className={styles.phoneContat}>
                    {/* Imagem atendente */}
                    <div className={styles.imgCall}></div>
                    <ul>
                        <li>
                            <a href="tel:(11) 2149-7360">
                                <img src="/assets/Icon/telefone.svg" alt="Telefone" title="Telefone" />
                                (11) 2149-7360
                            </a>
                        </li>
                        <li>
                            <a href="http://wa.me/11930346854">
                                <img src="/assets/Icon/whatsapp.svg" alt="WhatsApp" title="WhatsApp" />
                                (11) 93034-6854
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
        <Footer/>
        </>
    )
}