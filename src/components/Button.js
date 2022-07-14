import React from 'react';

function Button(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <button
        className={`container-button ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
        onClick={() => props.handleClic(props.children)}>
        {props.children}
        </button>
    );
}

export default Button;