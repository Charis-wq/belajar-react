import type { JSX } from "react";

type ToolbarProps = {
    onClick: any;
};

export default function Toolbar({onClick }: ToolbarProps): JSX.Element {
    return (
        <div onClick={onClick} style={{backgroundColor: "blue"}}>
            <button onClick={onClick}>First</button>
            <button onClick={onClick}>Second</button>
        </div>
    );
}