import type { JSX } from "react"
import "./HelloWorld.css";

export default function HelloWorld(): JSX.Element {
    const props: object  = {
         text: "Hello world from props"
    }
    return (
        <div>
            <Header {...props}></Header>
            <Paraghraph></Paraghraph>
            
        </div>
    )
}

function Header({text = "Ups Im Sorry "}): JSX.Element {;
    return (
        <h1 className="tittle" >{text}</h1>
    );
}

function Paraghraph(): JSX.Element {
    const text: string = "Selamat Belajar React";
    return (
        <p className="content">{text}</p>
    );
}