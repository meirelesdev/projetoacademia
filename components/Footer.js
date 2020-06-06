import styles from './Footer.module.css'
import Link from 'next/link'

export default () => {
    return (
        <>
            <div className={styles["fundogray"]}>
                
                <div className={styles["linksuteis"]}>
                    <h1 className={styles["titulo"]}>Links Úteis:</h1>

                    <div className={styles["linkcontato"]}>
                        <div className={styles["navinferior"]}>
                            <h1 className={styles["subtitulo"]}>Links:</h1>
                            <ul className={styles["listalinks"]}>
                                <li><Link href="/" ><a>Home</a></Link></li>
                                <li><Link href="/" ><a>Sobre nós</a></Link></li>
                                <li><Link href="/" ><a>Galeria</a></Link></li>
                                <li><Link href="/" ><a>Planos</a></Link></li>
                                <li><Link href="/" ><a>Corporativo</a></Link></li>
                                <li><Link href="/" ><a>Contato</a></Link></li>
                            </ul>
                        </div>

                        <div>
                            <div className="contatos">
                                <h1 className={styles["subtitulo"]}>Contatos úteis:</h1>
                                <p className={styles["conteudo"]}>
                                    Fixo: (11)2149-7360< br />
                                    WhatsApp: (11)93034-6854
                                </p>
                            </div>

                            <div>
                                <h1 className={styles["subtitulo"]}>Endereço:</h1>
                                <p className={styles["conteudo"]}>
                                    Av. José Versolato, 101<br/>
                                    São Bernardo do Campo - SP<br/>
                                    09750-730
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles["ulbuttonsocial"]} >
                    <h1 className={styles["subtitulo"]}>Redes Sociais:</h1>
                    <ul className={styles["listasociais"]}>
                        <li><a href="https://pt-br.facebook.com/" class={styles["botaosocial"]}><img src="assets/Icon/face.svg" id={styles["iconsocial"]} /></a></li>
                        <li><a href="https://twitter.com/" class={styles["botaosocial"]}><img src="assets/Icon/twitter.svg" id={styles["iconsocial"]} /></a></li>
                        <li><a href="https://br.pinterest.com/" class={styles["botaosocial"]}><img src="assets/Icon/pinterest.svg" id={styles["iconsocial"]} /></a></li>
                        <li><a href="https://br.linkedin.com/" class={styles["botaosocial"]}><img src="assets/Icon/linkedin.svg" id={styles["iconsocial"]} /></a></li>
                        <li><a href="https://www.youtube.com/" class={styles["botaosocial"]}><img src="assets/Icon/youtube.svg" id={styles["iconsocial"]} /></a></li>
                        <li><a href="https://www.instagram.com/" class={styles["botaosocial"]}><img src="assets/Icon/insta.svg" id={styles["iconsocial"]} /></a></li>
                    </ul>
                </div>

                <div className={styles["textologo"]}>
                    <p className={styles["conteudologo"]}>
                        Fitness training é nossa vida e filosofia.< br />
                        Oferecemos treinamento individual,< br />
                        programas esportivos especificos para atletas,< br />
                        treinamento / instrução com kettlebell,< br />
                        bem como programas nutricionais personalizados.
                    </p>
                    <img className={styles["logorodape"]} src="assets/Logo/Fitness.svg" id="logo" alt="Logo" />
                </div>

            </div>
            
            <div className={styles["fundopreto"]}>
                <h1>Todos os Direitos Reservados 2020</h1>
            </div>
        </>
    )
}