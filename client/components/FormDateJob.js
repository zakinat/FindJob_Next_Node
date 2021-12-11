import React from 'react'

const FormDateJob = () => {
    return (
        <form >
            <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name={name}
                value={name}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
                />
            <input type='checkbox'/>
            
        </form>
    )
}

export default FormDateJob
