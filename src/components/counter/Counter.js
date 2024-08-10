import React from 'react';
import { useState } from 'react';
import Button from './Button';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <section className='counter-section'>
                <Button onClick={() => setCount(count - 1)} label="-" />
                <h1>{count}</h1>
                <Button onClick={() => setCount(count + 1)} label="+" />
            </section>
        </div>
    );
};

export default Counter;
