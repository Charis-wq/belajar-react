import type { JSX } from "react";
type MyButton = {
    text: string;
    onSmash?: string
}

export default function MyButton({ text, onSmash }: MyButton): JSX.Element {
    function handleClick() {
        alert(onSmash);

    }

    return(
    <button onClick={handleClick} >{text}</button>
)
    
}