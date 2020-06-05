import styles from './Header.module.css'

export default () => {
    return (
        <>
            <div className={styles["headerfundo"]}>
                
                <a href="/"><img className={styles["logo"]} src="assets/Logo/Fitness.svg" id="logo" alt="Logo" /></a>
                
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

            </div>
        </>
    )
}