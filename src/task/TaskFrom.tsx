import { useState, type JSX } from "react";

interface TaskFormProps {
    onSubmite: (item: string) => void;
}

export default function TaskFrom({onSubmite}: TaskFormProps): JSX.Element {
        const [item, setItem] = useState<string>("");
        
        function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
            setItem(e.target.value);
        }
    
        function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
            e.preventDefault();
            onSubmite(item);
            setItem("");
        }
    return (
        <div>
            <h1>Creat Tasks</h1>
           
            <form action="">
                 <input value={item} onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
            </form>
        </div>

    )
}