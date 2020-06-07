import styles from './Sectionblog.module.css'
import Thumb from './Thumb'
import button from '../components/Button'
import Button from '../components/Button'

export default function Sectionblog() {
    return(
        <section className={styles.blogsection}>
            <Thumb title="Alcançe seu melhor momento" text="Com uma Equipe enchuta de Crossfit e com fortes objetivos é possivel alcançar seu máximo">
                <Button text="Leia mais +" />
             </Thumb>

             <Thumb title="Alcançe seu melhor momento" text="Com uma Equipe enchuta de Crossfit e com fortes objetivos é possivel alcançar seu máximo">
             <Button text="Leia mais +" />
             </Thumb>
             
             <Thumb title="Alcançe seu melhor momento" text="Com uma Equipe enchuta de Crossfit e com fortes objetivos é possivel alcançar seu máximo" >
             <Button text="Leia mais +" />
             </Thumb>
        </section>
    )
}