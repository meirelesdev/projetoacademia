import styles from './Input.module.css'

export default function Input(props) {
    return (
        <div className={styles.field}>
            <input type={props.type} name={props.name}onBlur={props.onBlur} onChange={props.onChange} onFocus={props.onFocus}  id={props.name} />
            <label htmlFor={props.name}>{props.label}</label>
        </div>
    )
}