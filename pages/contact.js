import Header from '../components/Header'
import Footer from '../components/Footer'
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import Button from '../components/Button'
import styles from '../components/Contact.module.css'
import Banner from '../components/Banner'


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
export default function Contact() {
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
                    <form className={styles.form}>
                        <div className={styles.fields}>
                            <Input type="text" name="name" label="Nome Completo"/>
                            <Input type="email" name="email" label="Email"/>
                            <Input type="tel" name="phone" label="Celular"/>
                        </div>
                        <Textarea name="message" label="Mensagem" /> 
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
                    <div className={styles.map}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1826.7852011438006!2d-46.550695142056014!3d-23.69131633999103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4235e0bc7d9b%3A0x1b7b6701e525d0fe!2sR.%20Jos%C3%A9%20Versolato%2C%20101%20-%20Centro%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009750-730!5e0!3m2!1spt-BR!2sbr!4v1591667152112!5m2!1spt-BR!2sbr" width="100%" height="100%" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
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