import React from "react"

function LabelInput({labelText, type, setter, defaultValue}) {
    return (
        <div className="label-input">
            <label>
                {labelText}:
            </label>
            <input 
                onChange = {(e) => setter(e.target.value)} 
                defaultValue = {defaultValue}
                type = {type} 
                name = {type} 
                id = {type} />
        </div>
    )
}

export default LabelInput