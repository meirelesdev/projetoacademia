import Header from '../components/Headerindex'
import App from 'next/app'
import Link from 'next/link'
import Footer from '../components/Footer'
import styles from '../components/Index.module.css'



export default function Index() {
    return(
        <>
            <Header/>
                
            <div className={styles["bannergrande"]}>
                <div className={styles["textobanner"]}>
                    <p id={styles["primeiro"]}>
                        O sucesso só<br/>
                        depende de você!
                    </p>
                    <p id={styles["segundo"]}>
                        Sinta-se sempre saudável!
                    </p>
                    <div id={styles["terceiro"]}><p>Planos a partir de</p></div>
                    <div id={styles["quarto"]}><p>R$ 69,99</p></div>
                </div>
                <img src="assets/Images/bannertop.jpg" id={styles["corredor"]} alt="banner home"/>
            </div>

            <div className={styles["texto"]}>
                <div className={styles.quadrado}></div>
                <h1 className={styles["titulo"]}>Sua trejatoria começa aqui</h1>

                <div className={styles["conteudo"]}>
                    <h1>
                        Bem Vindos a<br/>
                        FITNESS TRAINING
                    </h1>
                    <p>Nossa missão é melhorar sua vida através da atividade física</p>
                    <p>em um ambiente amigável e acolhedor.</p>
                    <p>Com um programa de condicionamento físico nós da FITNESS TRAINING</p>
                    <p>temos o objetivo de prepará-lo para todos os desafios físicos da vida!</p>
                </div>

                <img id={styles["fundoblog"]} src="assets/Images/pesosbola.jpg"/>
            </div>

            <div className={styles["blog"]}>
                <div className={styles.quadrado}></div>
                <h1 className={styles["titulo"]}>Últimas Postagens</h1>

                {/* INSERIR COMPONETE DO BLOG AQUI ;) */}

                <img id={styles["fundoblog"]} src="assets/Images/fundoblog.jpg"/>
            </div>

            <div className={styles["nossosplanos"]}>
                <div className={styles.quadrado}></div>
                <h1 className={styles["titulo"]}>Nossos planos</h1>
                <p>
                    A FITNESS está presente em diversas partes do mundo, venha conhecer nossos,<br/>
                    planos m deles irá se adequara sua nescessidade.
                </p>
                <Link href="/planos"><a className={styles["leiamaisbotao"]}>Leia mais +</a></Link>
                <div id={styles["imagens"]}>
                    <img id={styles["mapa"]} src="assets/Images/mapa.jpg"/>
                    <img id={styles["mulher"]} src="assets/Images/mulherforte.jpg"/>
                </div>
            </div>

            <div className={styles["blogs"]}>
                <div className={styles["itemblog"]}>
                    <img id={styles["fundoblogmateria"]} src="assets/Images/blog1.jpg" alt="fundomateria"/>
                    <h1>Performace nos TREINOS</h1>
                    <div id={styles["paragrafo"]}>
                        <p>Com uma equipe enchuta de CrossFit e com Fortes</p>
                        <p>ojetivos, é possível alcançar seu máximo,</p>
                        <p>em corpo e mente!</p>
                    </div>
                    <Link href="/blog"><a className={styles["leiamaisbotaoblog"]}>Leia mais +</a></Link>
                </div>
                <div className={styles["itemblog"]}>
                    <img id={styles["fundoblogmateria"]} src="assets/Images/blog2.jpg" alt="fundomateria"/>
                    <h1>Alcançe seu MELHOR MOMENTO</h1>
                    <div id={styles["paragrafo"]}>
                        <p>Com nossas aulas de Yoga, você será capas de se</p>
                        <p>conectar com seu lado mais leve.</p>
                    </div>
                    <Link href="/blog"><a className={styles["leiamaisbotaoblog"]}>Leia mais +</a></Link>
                </div>
                <div className={styles["itemblog"]}>
                    <img id={styles["fundoblogmateria"]} src="assets/Images/blog3.jpg" alt="fundomateria"/>
                    <h1>Aqui desistir NÃO é uma opção</h1>
                    <div id={styles["paragrafo"]}>
                        <p>Nossa equipe é composta por profissionais</p>
                        <p>altamente capacitados para lhes ajudar e alcançar</p>
                        <p>todo o seu potencial!</p>
                    </div>
                    <Link href="/blog"><a className={styles["leiamaisbotaoblog"]}>Leia mais +</a></Link>
                </div>
            </div>
            
            <Footer/>
        </>
    )
}