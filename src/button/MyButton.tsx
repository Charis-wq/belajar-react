import type { JSX } from "react";
type MyButton = {
    text: string;
    onSmash: React.MouseEventHandler<HTMLButtonElement>;
}

export default function MyButton({ text, onSmash }: MyButton): JSX.Element {
    return(
    <button onClick={onSmash} >{text}</button>
)
    
}