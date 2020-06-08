import styles from './Planos.module.css'
import CompImg from './CompImg'
export default function Planos(props) {
    return (
        <div className={styles.pagina}>

                    <div className={styles.banner}>
                            
                            <div className={styles.quadrado}></div>
                            <h1>Tabela de planos:</h1>
  
                      <CompImg src="assets/Images/bannerplanos.png" alt="banner" id={styles.bannermaior} />
                    </div>

                    <div className={styles.textopropaganda}>
                        <p>
                            Nossa marca de Fitness é um exelente programa que enfatiza a importancia da mecânica, consistência e intensidade (nessa ordem).<br/>
                            Todas as nossas aulas são ministradas por treinadores para ajudar a orientá-lo para a melhor hora do seu dia.<br/>
                            Seu trabalho é entrar, trabalhar duro, se divertir e sair feliz.
                        </p>
                    </div>

                    <div className={styles.planosgrupo}>
                        <div className={styles.planos}>
                            <h1>Plano Start</h1>
                            <h2>
                                Treine o quanto quiser na sua unidade,<br/>
                                sem taxa de cancelamento.
                            </h2>
                            <h2>Mensalidades a partir de R$ 69,90</h2>

                            <h3 id={styles.middle}>ATIVIDADES</h3>
                            <ul>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Área de musculação e aeróbicos</li>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Aulas especiais</li>
                            </ul>
                            <h3>BENEFÍCIOS INCLUSOS</h3>
                            <ul>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Área de musculação e aeróbicos</li>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Aulas de Ginastica</li>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Sem taxa de cancelamento</li>
                            </ul>
                            <a href="/contact" class={styles.buttonassinar}>Assinar agora</a>
                        </div>

                        <div className={styles.planos}>
                            <h1>Plano Master</h1>
                            <h2>
                                Treine em qualquer unidade Smart Fit a América Latina.
                            </h2>
                            <h2>Mensalidades a partir de R$ 99,90</h2>

                            <h3 id={styles.middle}>ATIVIDADES</h3>
                            <ul>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Área de musculação e aeróbicos</li>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Aulas especiais</li>
                            </ul>
                            <h3>BENEFÍCIOS INCLUSOS</h3>
                            <ul>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Área de musculação e aeróbicos</li>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Aulas de Ginastica</li>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Cadeira de massagem</li>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Acesso ilimitado às demais unidades da rede**</li>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Camiseta Black</li>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Treinar com um amigo</li> 
                            </ul>
                            <a href="/contact" class={styles.buttonassinar}>Assinar agora</a>
                        </div>
                            
                        <div className={styles.planos}>
                            <h1>Plano CrossFit</h1>
                            <h2>
                                Treine em qualquer unidade Smart Fit a América Latina.
                            </h2>
                            <h2>Mensalidades a partir de R$ 69,90</h2>

                            <h3 id={styles.middle}>ATIVIDADES</h3>
                            <ul>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Área de musculação e aeróbicos</li>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Aulas especiais</li>
                            </ul>
                            <h3>BENEFÍCIOS INCLUSOS</h3>
                            <ul>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Área de musculação e aeróbicos</li>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Aulas de Ginastica</li>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Cadeira de massagem</li>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Acesso ilimitado às demais unidades da rede**</li>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Camiseta Black</li>
                                <li><img src="assets/Icon/seta2.svg" id={styles.iconseta} />Treinar com um amigo</li> 
                            </ul>
                            <a href="/contact" class={styles.buttonassinar}>Assinar agora</a>
                        </div>
                    </div>

                    <div className={styles.textoinferior}>
                        <div className={styles.textoesquerda}>
                            <h1>Plano Personal Trainer</h1>
                            <p>
                                Está cansado de passar o ano todo, tendo que desviar de retardatários<br/>
                                e de pessoas que não tem o mesmo comprometimento<br/>
                                que o seu na hora de praticar exercicios físicos ?<br/>
                                Conheça nosso plano especial, Personal Trainer. Tenha<br/>
                                um professor exclusivo e dedicado a fazer você alcançar<br/>
                                o fisico que sempre sonhou.
                            </p>
                            <a href="/contact" class={styles.buttonassinar}>Assinar agora</a>
                        </div>

                        <div className={styles.imagemdireita}>
                            <img src="assets/Images/personal.png" alt="personal" id={styles.personal}/>
                        </div>
                    </div>

                </div>
    )
}