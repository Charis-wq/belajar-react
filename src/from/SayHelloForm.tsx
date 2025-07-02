import type { JSX } from "react";
import React from "react";

export default function SayHelloFrom(): JSX.Element {

    function handleClick(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        const input = document.getElementById("input_name") as HTMLInputElement | null;
        const name = input ? input.value : "";
        const textHello = document.getElementById("text_hello");
        if (textHello) {
            textHello.innerText = `Hello ${name}`;
        }
    }
    return(
        <div>
            <form>
                <input id="input_name" />
                <button onClick={handleClick}>Say Hello</button>
            </form>
            <h1 id="text_hello">Hello</h1>
        </div>
    )
}