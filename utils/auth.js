import axios from 'axios'
import Router from 'next/router'
import { Cookies } from 'react-cookie'
import serverUrl from './env'

const cookies = new Cookies()

export default async function handleAuthSSR(ctx) {
    
    let token = null
    
    if(ctx.req.cookie) {
        token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    } else {
        token = cookies.get('token')
    }
    try{
        const config = {
            header: {Authorization: `Bearer ${token}`}
        }
        await axios.get(serverUrl + '/admin/users', config)
        .then( res => res )
        .catch(err => console.log("Error na resposta: "+ err.message))

    }catch (err) {
        console.log('Usuário sem permissão, redirecionando!')

        if(ctx.res){
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        }else {
            Router.push('/admin')
        }
    }
}