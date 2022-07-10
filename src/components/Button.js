import React from "react";

function Button (props) {

    const esOperador = valor =>{
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return(
        <div className={`container-button ${esOperador(props.children) ? 'operador' : ' '}`.trimEnd()}>
            {props.children}
        </div>
    );
}

export default Button