// import { handleAuthSSR } from '../../utils/auth'

export default function Index(prop) {
    
    return (
        <header>
            <h1>Você esta na index do admin</h1>
        </header>

    )
}
// Index.getInitialProps = async (ctx) => {

//     const res = await handleAuthSSR(ctx)

//     return { res }
// }