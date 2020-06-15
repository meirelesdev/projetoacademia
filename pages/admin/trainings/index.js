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

export default function Trainings({ trainings }){
    
    return(
          <Header  textHeader="Trainings"  >
                <Button text="Adicionar" action="Adicionar" model="trainings" />
                <div className={styles.usersContent}>
                    <ul className={styles.headerUsers}>
                    <li>nome</li>
                        <li>E-mail</li>
                        <li>Administrativo</li>
                        <li>Ações</li>
                    </ul>
                    
                </div>
                {trainings.length > 0 ? 
                trainings.map((training, index)=>(
                    <div className={styles.userContent} key={index}>
                        <h4>{training.training_name}</h4>
                        <p>{training.description}</p>
                        <Button text="Editar" action="editar" id={training.id} model="trainings" />
                        <Button text="Excluir" action="delete" id={training.id} model="trainings" />
                    </div>
                    ))
                    
            : <p>Sem usuarios cadastrados</p>}
            
            </Header>
    )
}
Trainings.getInitialProps = async (ctx) => {
    let trainings = []

    trainings = await axios.get(`${serverUrl}/training`)

    return { "trainings": trainings.data}

}