import type { JSX } from "react";
type AlertButton = {
    text: string;
    message?: string
}

export default function AlertButton({ text, message }: AlertButton): JSX.Element {
    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        console.log(e.target)
        alert(message);

    }

    return(
    <button onClick={handleClick} >{text}</button>
)
    
}

