
import Header from '../../components/admin/Header'
import { useCookies } from 'react-cookie'
import { useState } from 'react'


export default function Index({users}) {

    const [cookies, setCookie] = useCookies();
    const name = cookies.user    
    
    return (
    <>
        <Header textHeader="Bem Vindo ao Painel" userName={name}>
            <p>Usuarios</p>
                <p></p>
        </Header>
   
    </>      
    )

}

