import { useContext, type JSX } from "react";
import Note from "../note/Note"
import { NotesContext } from "./NoteContext";



export default function NoteList(): JSX.Element {
    const notes = useContext(NotesContext);
    return(
        <ul>
            {notes.map(note => (
                <li key={note.id}>
                    <Note note={note}/>

                </li>
            ))}
        </ul>
    )
}