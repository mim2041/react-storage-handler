import React from 'react';
import {add,multiply} from '../utilities/Calculate';

const Shoes = () => {
    const first = 13;
    const second = 11;
    const result = multiply(first, second);
    const total = add(first, second)
    return (
        <div>
            <h1>This is my shoes component</h1>
            <p>Result: {result} and Total: {total}</p>
        </div>
    );
};

export default Shoes;