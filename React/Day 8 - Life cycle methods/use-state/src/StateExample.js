import { useState } from 'react';

export default function StateExample() {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter+1);
    }

    return(
        <>
            <h1>This is example of use state</h1>
            <button onClick={increment}>+</button>
            <span>{counter}</span>
            <button>-</button>
        </>
    )
}