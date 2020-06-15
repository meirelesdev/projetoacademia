
import Header from '../../components/admin/Header'
import handleAuthSSR from '../../utils/auth'


function Index({ user }) {
    return (
    <>
        <Header textHeader="Bem Vindo ao Painel" userName={user.name}>
            <p>Usuarios</p>
                <p></p>
        </Header>
   
    </>      
    )

}

Index.getInitialProps = async ctx => {
    const user = await handleAuthSSR(ctx)
    return { user }
}

export default Index