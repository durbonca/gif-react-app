import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ handleAdd }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(inputValue?.trim().length > 0) {
        handleAdd( { input: inputValue } )
    }
    setInputValue('')
  }

  return (
      <form onSubmit={handleSubmit}>
        <p>{inputValue}</p>
        <input
            type="text"  
            value={inputValue}  
            onChange={handleInputChange}
        />
        <button type="submit">Agregar</button>
      </form>
  )
}

AddCategory.propTypes = {
    handleAdd: PropTypes.func.isRequired,
}
