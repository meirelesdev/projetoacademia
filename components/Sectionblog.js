import styles from './Sectionblog.module.css'
import Thumb from './Thumb'

export default function Sectionblog() {
    return(
        <section className={styles.blogsection}>
            <Thumb title="Alcançe seu melhor momento" text="Com uma Equipe enchuta de Crossfit e com fortes objetivos é possivel alcançar seu máximo">
                <button>Leia mais +</button>
             </Thumb>

             <Thumb title="Alcançe seu melhor momento" text="Com uma Equipe enchuta de Crossfit e com fortes objetivos é possivel alcançar seu máximo">
                <button>Leia mais +</button>
             </Thumb>
             
             <Thumb title="Alcançe seu melhor momento" text="Com uma Equipe enchuta de Crossfit e com fortes objetivos é possivel alcançar seu máximo" >
                <button>Leia mais +</button>
             </Thumb>
        </section>
    )
}