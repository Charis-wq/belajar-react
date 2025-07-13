import { useRef, useState, type JSX } from "react";

export default function Timer(): JSX.Element {
    const [start, setStart] = useState<any>(null);
    const [now, setNow] = useState<any>(null);
    const timer = useRef<any>(null);

    function handleStart(){
        setStart(Date.now());
        setNow(Date.now());
        timer.current= setInterval(() => {
            setNow(Date.now());
        }, 10)

    }

    function handleStop(){
        clearInterval(timer.current);
    }


    return(
        <>
        <h1>Timer:{now - start} ms</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        </>
    )
}