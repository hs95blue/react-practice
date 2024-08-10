import React from 'react';

const Button = ({ onClick, label }) => {
    const str = 'sss'
    return (
        <button  className={`button ${label=='-' && 'minus'}`} onClick={onClick}>
            {label}
        </button>
    );
    
};

export default Button;
