import { useState } from "react";
import PropsTypes from "prop-types";


export const AddCategory = ({setCategories}) => {
    const [InputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (InputValue.trim().length > 2) {
            setCategories(cats => [InputValue, ...cats])
            setInputValue('')
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={InputValue}
            onChange={handleInputChange}
            placeholder="Search"
        />
    </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropsTypes.func.isRequired
}