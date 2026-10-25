import React from 'react'
import { useState } from 'react'

const FormInput = () => {
    const [focused,setFoucused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = () => {
        setFoucused(true);
    }

  return (
    <div className="flex flex-col mb-4">
      <label>{label}</label>
      
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        data-focused={focused.toString()}
      />
      
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
