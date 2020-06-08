import axios from 'axios'
import Router from 'next/router'
import serverUrl from './env'


export async function handleAuthSSR(ctx) {
    
    let token = null
    
    if(ctx.req) {
        token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    } else {
        token = cookies.get('token')
    }
    try{
        const config = {
            header: {Authorization: `Bearer ${token}`}
        }
        await axios.get(serverUrl + '/auths', config)
        .then((res)=> console.log(res))
        .catch(err => console.log(err))

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