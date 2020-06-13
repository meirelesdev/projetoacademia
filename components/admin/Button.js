import styles from './Button.module.css'
import Router from 'next/router'
import axios from 'axios'
import serverUrl from '../../utils/env'


export default function Button(props){
    const handleClick = async e=>{
        switch(props.action) {
            case "Adicionar":
                Router.push(`/admin/${props.model}/add`)
                console.log("tela add user")
                break
            case "save":
                await axios.put(`${serverUrl}/admin/users/${props.id}`, props.values)
                console.log("salvando Alteraçoes")
                break
            case "passwordChange":
                await axios.put(`${serverUrl}/admin/${props.model}/${props.id}`, props.values)
                console.log("salvando senha")
                break
            case `new${props.model}`:
                await axios.put(`${serverUrl}/admin/${props.model}`, props.values)
                console.log(`Cadastrando novos ${props.model}`)
                break            
        }
    }
    return(
        <button className={styles.button} onClick={handleClick} >{props.text}</button>
    )
}