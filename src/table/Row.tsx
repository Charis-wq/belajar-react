import type { JSX } from "react";

interface RowProps {
    text: string;
    id: string;
}

export default function Row({ text, id }: RowProps): JSX.Element {
    return(
        <tr>
            <td>{id}</td>
            <td>{text}</td>
        </tr>
    )
}