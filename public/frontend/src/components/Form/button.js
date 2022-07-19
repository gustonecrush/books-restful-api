import React from 'react'

function Button({ children, type = 'button', ...props }) {

    return (
        <button
            className={`${props.disabled ? 'bg-gray-600' : 'bg-blue-500'} mr-2 ${
                props.disabled ? 'hover:bg-gray-600' : 'hover:bg-blue-700'
            }  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            type={type}
            {...props}>
            {children}
        </button>
    )
}

export default Button
