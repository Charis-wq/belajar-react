import { useState, type JSX } from "react";

type Counter2Props = {
    name?: string
}

export default function Counter2({ name }: Counter2Props): JSX.Element {
    const [count, setCount] = useState(0);

    function handleClicK() {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Counter {name} : {count}</h1>
            <button onClick={handleClicK}>Incerment</button>
        </div>
    )
}