import styles from './Planos.module.css'
import CompImg from './CompImg'
import Plano from './Plano'

export default function Planos(props) {
    return (
        <div className={styles.pagina}>

                    <div className={styles.banner}>
                            
                        <div className={styles.quadrado}></div>
                        <h1>Tabela de planos</h1>
  
                        <CompImg srcSet="/assets/Images/banner-planos-ginastica.jpg" alt="banner" id={styles.bannermaior} />
                    </div>

                    {props.children}

                    <div className={styles.textopropaganda}>
                        <p>
                            Nossa marca de Fitness é um exelente programa que enfatiza a importancia da mecânica, consistência e intensidade (nessa ordem).<br/>
                            Todas as nossas aulas são ministradas por treinadores para ajudar a orientá-lo para a melhor hora do seu dia.<br/>
                            Seu trabalho é entrar, trabalhar duro, se divertir e sair feliz.
                        </p>
                    </div>

                    <div className={styles.planosgrupo}>
                        
                        {
                            props.listaPlanos.map(
                                item => (
                                    <Plano key={item.id} nome={item.nomeplano} descricao={item.descricaoplano} valor={item.valor} />
                                )
                            )
                        }

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
                            <a href="/contact" className={styles.buttonassinar}>Assinar agora</a>
                        </div>

                        <div className={styles.imagemdireita}>
                            <img srcSet="/assets/Images/img-personal-trainer.jpg" alt="personal" id={styles.personal}/>
                        </div>
                    </div>

                </div>
    )
}