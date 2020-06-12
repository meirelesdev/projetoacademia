import serverUrl from './env'
import axios from 'axios'

export default async function totUsers() {
    
    let res = await axios.get(`${serverUrl}/admin/users`)

    return {
        "users": res.data
    }
}