import React from 'react';
import react, { useState } from 'react';
const CounterApp = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div style={{ border: '1px solid black', padding: '20px', margin: '20px' }}>
            <h1 style={{color:'lightgreen'}}>Counter App</h1>
            <br />
            <button style={{ padding: '10px 20px', fontSize: '16px' }} onClick={() => setCount(count + 1)}>
                +
            </button>
            <span style={{ margin: '0 20px', fontSize: '18px' }}>{count}</span>
            <button style={{ padding: '10px 20px', fontSize: '16px' }} onClick={() => setCount(count - 1)}>
                -
            </button>
        </div>
        
    );

};

export default CounterApp;