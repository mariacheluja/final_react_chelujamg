//import React from 'react'



import PropTypes from 'prop-types'; // Importa PropTypes


const FormComponent = ({ formData, inputChange, onSumbit }) => {
    return (
        <form onSubmit={onSumbit}>

            {
                Object.keys(formData)
                    .map((key, i) => (
                        <>
                            <label htmlFor="name" key={i}>Ingrese {key}</label>
                            <input
                                required
                                type="text"
                                id={key}
                                name={key}
                                value={formData[key]}
                                onChange={inputChange}
                            />
                        </>
                    ))
            }
            <button className='btn btn-primary'>Create order</button>
        </form>
    )
}

FormComponent.propTypes = {
    formData: PropTypes.object.isRequired, // Valida que formData sea un objeto requerido
    inputChange: PropTypes.func.isRequired, // Valida que inputChange sea una función requerida
    onSumbit: PropTypes.func.isRequired, // Valida que onSumbit sea una función requerida
};


export default FormComponent