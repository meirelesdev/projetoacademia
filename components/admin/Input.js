
export default function Input(props){
    return(
        <>
        <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} id={props.name} value={props.value} min={props.min} max={props.max} name={props.name} onChange={props.onChange} onFocus={props.onFocus} />
        </>
    )
}