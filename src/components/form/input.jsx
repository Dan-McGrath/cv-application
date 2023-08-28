import { useState } from "react";

function Input({type, name, idName, text, handler, value}) {
    return (
        <input 
            type={type} 
            name={name} 
            id={idName} 
            placeholder={text} 
            value={value} 
            onChange={handler}
        />
    );
}

function Label({htmlFor, text}) {
    return <label htmlFor={htmlFor}>{text}</label>
}

export {Input, Label}