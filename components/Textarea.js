import styles from './Textarea.module.css'

export default function Textarea(props) {
    return (
        <div className={styles.field}>
            <textarea name={props.name} id={props.name} />
            <label htmlFor={props.name}>{props.label}</label>
        </div>
    )
}