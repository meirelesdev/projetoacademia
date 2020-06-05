import styles from './Thumb.module.css'

export default function Thumb(props) {
    return (
        <div className={ styles.thumb }>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            {props.children}
        </div>
    )
}