import Header from '../../../components/admin/Header'
import Button from '../../../components/admin/Button'
import styles from '../../../components/admin/Users.module.css'

export default function Users(props){
    return(
        <>
            <Header  textHeader="Usuarios" >
                <Button text="Adicionar"/>
                <div className={styles.usersContent}>
                    <ul className={styles.headerUsers}>
                        <li>Avatar</li>
                        <li>nome</li>
                        <li>E-mail</li>
                        <li>Administrativo</li>
                        <li>Ações</li>
                    </ul>
                    <div className={styles.userContent}>
                        <img src="../assets/Images/blog1.jpg" alt=""/>
                        <h4>Daniel Meireles</h4>
                        <p>Email@gmail.com</p>
                        <p>sim</p>
                        <Button text="Editar"/>
                        <Button text="Excluir"/>
                    </div>
                </div>
            </Header>
        </>
    )
}
