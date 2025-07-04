import type { JSX } from "react";
type TaskListProps = {
    items: string[];
};

export default function TaskList({ items }: TaskListProps): JSX.Element {
    return(
        <div>
                <h1>List Task</h1>
                <ul>
                    {items.map((item, index) => 
                        <li key={index}>{item}</li>
                    )}
                </ul>
    
        </div>

        
    )

}