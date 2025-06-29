import type { JSX } from "react"

export default function HelloWorld(): JSX.Element {
    return (
        <div>
            <Header></Header>
            <Paraghraph></Paraghraph>
            
        </div>
    )
}

function Header(): JSX.Element {
    const text: string = "Hello World";
    return (
        <h1 style={{color: "blue", backgroundColor: "maroon"}}>{text}</h1>
    );
}

function Paraghraph(): JSX.Element {
    const text: string = "Selamat Belajar React";
    const style: React.CSSProperties = {

        color: "red",
        backgroundColor: "yellow"
    }
    return (
        <p style={style}>{text}</p>
    );
}