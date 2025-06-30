
import Todo from "./todo.tsx";
import type { JSX } from "react";;

export default function TodoList(): JSX.Element {
    type TodoItem = {
        text: string;
        isComplete: boolean;
        isDeleted: boolean;
        id: number;
    };

    const data: TodoItem[] = [
        {
            id: 0,
            text: "Learn HTML",
            isComplete: true,
            isDeleted: true
        },
        {
            id: 1,
            text: "Learn CSS",
            isComplete: true,
            isDeleted: false
        },
        {
            id: 2,
            text: "Learn Javascript",
            isComplete: true,
            isDeleted: false
        },
        {
            id: 3,
            text: "Learn raect",
            isComplete: false,
            isDeleted: false
        },
    ];
    const Todos = data.map((todo, id) => {
        return <Todo key={id} {...todo} />
    });

    return(
        <ul>
           {Todos}
        </ul>
    );
}
