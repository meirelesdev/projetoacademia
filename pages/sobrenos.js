import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import styles from '../components/Sobrenos.module.css'
import Link from 'next/link'

export default (props) => {
    return (
        <>
            <Header/>
                <Banner fotoBanner="assets/Images/bannersobrenos.jpg" titleBanner="Sobre nós" />
                <div className={styles["textosobre"]}>
                    <h1>Fitness Training</h1>

                    <h2>"A busca pela perfeição está dentro de todos nós!"</h2>

                    <div className={styles["paragrafos"]}>
                        <p>A Fitness Training é uma academia pensada para você, 
                        com mais de 10 anos de mercado ela possui em seu repertório 
                        um histórico de grandes vitórias em seu acervo...</p>

                        <p>Com um leque recheado de profissionais altamente 
                        capacitados, ela busca sempre mais para oferecer a seus clientes com 
                        uma linha completa de treino que vai de uma simples yoga até um treino 
                        super pesado em crossfit, nós temos a solução certa para que você atinja
                        de uma vez por todas, os seus objetivos!</p>

                        <p>Se você está em busca de profissionas e estrutura de primeiro mundo, 
                        a Fitness Training é o local certo para que você se desenvolva plenamente, 
                        não há barreiras para até onde você possa crescer.</p>

                        <p>A Fitness Training está presente em todo o mundo, nossa rede de franquias é 
                        gigantesca, não fique de fora! Venha fazer parte dessa grande família, 
                        conheça mais de toda essa grandiosa estrutura em nossa <Link href="/gallery"><a>galeria de fotos.</a></Link></p>
                    </div>
                </div>
            <Footer/>
        </>
    )
}