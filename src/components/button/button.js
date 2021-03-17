import React from 'react';

const Button = ({onClick, name, className}) => {

    return(
        <div>
            <button
                onClick={onClick}
                className={className}>
                {name}
            </button>
        </div>
    )
}

export default Button;