import React, { useState, type JSX } from "react";
import Counter2 from "./Counter2";

export default function CounterApp(): JSX.Element {
    const [show, setShow] = useState(true);

    function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
        setShow(e.target.checked);
    }
    return (
        <div>
            {show && <Counter2/>}
            <input type="checkbox" onChange={handleChange} checked={show} />Tampilkan Counter 2
        </div>

    )
}