import { useRef, type JSX } from "react";
type AlertButton = {
    text: string;
    message: string
}

export default function AlertButton({ text, message }: AlertButton): JSX.Element {
    const counter= useRef(0);

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        console.log(e.target)
        alert(`${message} ${counter.current++}`);

    }

    return(
    <button onClick={handleClick} >{text}</button>
)
    
}

