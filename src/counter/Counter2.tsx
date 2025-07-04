import { useState, type JSX } from "react";

export default function Counter2(): JSX.Element {
    const [count, setCount] = useState(0);


    function handleClicK() {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleClicK}>Incerment</button>
        </div>
    )
}