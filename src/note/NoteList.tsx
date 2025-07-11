import type { JSX } from "react";
import Note from "../note/Note"

type NoteType = {
    id:  number;
    text: string;
    done: boolean;
    // add other fields as needed
};

type NoteListProps = {
    notes: NoteType[];
    onChange: (note: NoteType) => void;
    onDelete: (id: number) => void;
};

export default function NoteList({notes, onChange, onDelete}: NoteListProps): JSX.Element {
    return(
        <ul>
            {notes.map(note => (
                <li key={note.id}>
                    <Note

                        note={note}
                        onChange={onChange}
                        onDelete={() => onDelete(note.id)}
                    />

                </li>
            ))}
        </ul>
    )
}