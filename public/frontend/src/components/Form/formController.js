import React from 'react'

function FormController({ children, label, id }) {
    return (
        <div className="mb-4">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for={id}
                htmlfor={id}>
                {label}
            </label>
            {children}
        </div>
    )
}

export default FormController
