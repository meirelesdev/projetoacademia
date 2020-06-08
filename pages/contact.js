import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import styles from '../components/Contact.module.css';


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
        <div className={styles.imgContact}>
     </div>
        <section className={styles.container}>
            <h1 className={styles.teste}>Contatos</h1>        

                <form className={styles.form}>
                    <div className={styles.fields}>
                        <Input type="text" name="name" label="Nome Completo"/>
                    <Input type="email" name="email" label="Email"/>
                    <Input type="tel" name="phone" label="Celular"/>
                </div>
                <Textarea name="message" label="Mensagem" />
                <button type="submit">Enviar</button> 
            </form>
        </section>
        <Footer/>
        </>
    )
}