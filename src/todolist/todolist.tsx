
import Todo from "./todo.tsx";
import type { JSX } from "react";;

export default function TodoList(): JSX.Element {
    return(
        <ul>
            <Todo isComplete={true} text="Learn HTML" />
            <Todo isComplete={true} text="Learn CSS" />
            <Todo isComplete={true} text="Learn javascript" />
            <Todo isComplete={false} text="Learn React" />
        </ul>
    );
}
