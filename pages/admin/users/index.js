import Header from '../../../components/admin/Header'
import Button from '../../../components/admin/Button'
import styles from '../../../components/admin/Users.module.css'
import axios from 'axios'
import serverUrl from '../../../utils/env'
import { Cookies } from 'react-cookie'


const cookies = new Cookies()
const token = cookies.get('token')
const config = {
    header: {Authorization: ` Bearer ${token}`}
} 
export default function Users({ users }){
    
    return(
          <Header  textHeader="Usuarios"  >
                <Button text="Adicionar" action="Adicionar" model="users" />
                <div className={styles.usersContent}>
                    <ul className={styles.headerUsers}>
                        <li>Avatar</li>
                        <li>nome</li>
                        <li>E-mail</li>
                        <li>Administrativo</li>
                        <li>Ações</li>
                    </ul>
                    
                </div>
                {users.length > 0 ? 
                users.map((user, index)=>(
                    <div className={styles.userContent} key={index}>
                        <img src={`/assets/Images/${user.photo}`} alt=""  />
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>
                        <p>{user.isAdmin? "Sim":"Aluno"}</p>
                        <Button text="Editar" action="editar" id={user.id} model="users" />
                        <Button text="Excluir" action="delete" id={user.id} model="users" />
                    </div>
                    ))
                    
            : <p>Sem usuarios cadastrados</p>}
            
            </Header>
    )
}
Users.getInitialProps = async (ctx) => {
    let users = []

    users = await axios.get(`${serverUrl}/admin/users`)

    return { "users": users.data}

}