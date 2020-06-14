import styles from './Planos.module.css'
import CompImg from './CompImg'


export default function Planos(props) {
    return (
        <div className={styles.planos}>
            <h1>{props.nome}</h1>
            <h2>{props.descricao}</h2>

            <h2>Mensalidades a partir de R$ {props.valor}</h2>

            <h3 id={styles.middle}>ATIVIDADES</h3>
            <ul>
                <li><img srcSet="/assets/Icon/seta2.svg" id={styles.iconseta} />Área de musculação e aeróbicos</li>
                <li><img srcSet="/assets/Icon/seta2.svg" id={styles.iconseta} />Aulas especiais</li>
            </ul>
            <h3>BENEFÍCIOS INCLUSOS</h3>
            <ul>
                <li><img srcSet="/assets/Icon/seta2.svg" id={styles.iconseta} />Área de musculação e aeróbicos</li>
                <li><img srcSet="/assets/Icon/seta2.svg" id={styles.iconseta} />Aulas de Ginastica</li>
                <li><img srcSet="/assets/Icon/seta2.svg" id={styles.iconseta} />Sem taxa de cancelamento</li>
            </ul>
            <a href="/contact" className={styles.buttonassinar}>Assinar agora</a>
        </div>
    )
}