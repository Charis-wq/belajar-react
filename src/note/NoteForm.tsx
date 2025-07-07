import { useState, type JSX } from "react";

type NoteFormProps = {
    onAddNote: (note: string) => void;
};

export default function NoteForm({ onAddNote }: NoteFormProps): JSX.Element {
    const [text, setText] = useState("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setText(e.target.value);
    }

    function handleClick(): void {
        onAddNote(text);
        setText("");
    }

    return (
        <>
            <input type="text" placeholder="Add Note" value={text} onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
        </>
    );
}