import type { FC, JSX } from "react";

interface TodoProps {
    text: string;
    isComplete: boolean;
    isDeleted: null | boolean;
}
const Todo: FC<TodoProps> = ({ text, isComplete, isDeleted = false }): JSX.Element | null => {
    if (isDeleted) {
        return null;
    }
    return (
        <li>
            {text} {isComplete && "✔" }
        </li>
    );
};

export default Todo;

