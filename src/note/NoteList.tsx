import type { JSX } from "react";
import Note from "../note/Note"

type NoteType = {
    id: string | number;
    text: string;
    // add other fields as needed
};

type NoteListProps = {
    notes: NoteType[];
    onChange: (note: NoteType) => void;
    onDelete: (id: string | number) => void;
};

export default function NoteList({notes, onChange, onDelete}: NoteListProps): JSX.Element {
    return(
        <ul>
            {notes.map(note => (
                <li key={note.id}>
                    <Note
                        note={note}
                        onChange={(text: string) => onChange({ ...note, text })}
                        onDelete={() => onDelete(note.id)}
                    />

                </li>
            ))}
        </ul>
    )
}