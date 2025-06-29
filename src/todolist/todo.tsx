import type { FC, JSX } from "react";

interface TodoProps {
    text: string;
    isComplete: boolean;

}
const Todo: FC<TodoProps> = ({ text, isComplete }): JSX.Element => {
    return (
        <li>
            {isComplete ? <del>{text}</del> : text}
        </li>
    );
};

export default Todo;

