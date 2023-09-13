import { useState } from 'react'
import "./Campo.css"

const Campo = (props) => {
    //const [valor, actualizarValor] = useState("") o
    //const [valor, setValor] = useState("") //Muy usado en el ámbito laboral el set
    //console.log("Datos: ", props);
    const placeholderModificado = `${props.placeholder}...`
    
    //Destructuración
    const { type="text" } = props
    //console.log(type)

    const manejarCambio = (e) => {
        //console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>        
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />

    </div>
}

export default Campo