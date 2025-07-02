import type { JSX } from "react";
import Row from "./Row";

export default function Table(): JSX.Element {
    return(
        <table border={1}>
            <tbody>
            <Row id="1" text="Satu"/>
            <Row id="2" text="Dua"/>
            <Row id="3" text="Tiga"/>
        </tbody>
        </table>
        
    )

}