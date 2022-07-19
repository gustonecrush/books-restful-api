import React from 'react'

function TextArea(props) {
    return (
        <textarea
            className='w-full h-48'
            type="text"
            {...props}
        ></textarea>
    )
}

export default TextArea
