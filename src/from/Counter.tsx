import { useState, type JSX } from "react";

export default function Counter(): JSX.Element{
    let [counter, setCounter] = useState(0);
    console.log("counter rendered");

    return(
        <div>
            <div>
                <button onClick={ () => {
                    setCounter((c) => c + 1);
                    setCounter((c) => c + 1);
                    setCounter((c) => c + 1);//contoh lambda
                   // setCounter(counter + 1); ///kesalahan mengubah state
                    console.log(counter)
                }
                }>Incerment</button>
            </div>
            <h1>Counter: {counter} + 3</h1>
        </div>
    
    )
} 