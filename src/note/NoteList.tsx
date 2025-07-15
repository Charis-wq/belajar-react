import { useContext, useMemo, useRef, useState, type JSX } from "react";
import Note from "../note/Note"
import { NotesContext } from "./NoteContext";

type NoteType = {
  id: number;
  text: string;
  // tambahkan field lain kalau ada
};



export default function NoteList(): JSX.Element {
    const notes = useContext(NotesContext) as NoteType[];
    const [search, setSearch] = useState("");
    const searchInput = useRef<HTMLInputElement>(null);

    const filteredNotes = useMemo(() => {
        console.log("filtered notes")
        return notes.filter(note => note.text.includes(search))
    }, [notes, search]);

    function handleSearch(){
        console.log("search")
        setSearch(searchInput.current?.value ?? "")
    }
    return(
        <div>
            <input ref={searchInput} placeholder="search" />
            <button onDoubleClick={handleSearch} >Search</button>
            <ul>
            {filteredNotes.map(note => (
                <li key={note.id}>
                    <Note note={note}/>

                </li>
            ))}
        </ul>
        </div>
    )
}