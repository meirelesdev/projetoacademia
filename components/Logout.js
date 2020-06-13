import { useCookies } from 'react-cookie'

export default function Logout() {
        const logoutSystem = e => {
            const [cookies, setCookie] = useCookies();
            cookies.remove("user");
            cookies.remove("token");
            window.location.href = ("/")
        }
    return(
        <button onClick={logoutSystem}>Logout</button>
    )
}