import { useContext, useState, type JSX } from "react";
import { NotesDispatcheContext } from "./NoteContext";


export default function NoteForm(): JSX.Element {
    const [text, setText] = useState("");
    const dispatch = useContext(NotesDispatcheContext);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setText(e.target.value);
    }

    function handleClick(): void {
        setText("");
        dispatch({
            type: "ADD_NOTE",
            text: text
        })
    }

    return (
        <>
            <input type="text" placeholder="Add Note" value={text} onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
        </>
    );
}