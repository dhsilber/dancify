import React from 'react'
import './Activate.css'

function Activate(props) {
    if (!props.onClick) {
        throw Error("no onClick callback provided")
    }

    const handleClick = props.onClick.bind()
    return (
        <div className="Activate">
            <button onClick={() => handleClick() }>Activate</button>
        </div>
    )
}

export default Activate    