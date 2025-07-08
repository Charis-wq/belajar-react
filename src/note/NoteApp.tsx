import { useImmer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";


type FitureInitialNote = {
    id: number ;
    text: string;
    done: boolean;
};
let id = 0;

 const initialNotes: FitureInitialNote[] = [
    {id: id++, text: "leran HTML", done: false},
    {id: id++, text: "leran CSS", done: true},
    {id: id++, text: "leran Javascript", done: false},
    {id: id++, text: "leran ReactJS", done: false}
];

export default function NoteApp() {
    const[notes, setNotes] = useImmer(initialNotes);

    function handleOnAddNote(value: string) {
        setNotes((draft) => {
            draft.push({
                id: id++,
                text: value,
                done: false
            })
        })
    }

    function handleChangeNotes(note: any) {
        setNotes((draft) => {
            const index = draft.findIndex(item => item.id === note.id)
            draft[index] = note;
        })
        
    }

    
    function handleDeleteNote(note: any) {
        setNotes((draft) => {
            const index = draft.findIndex(item => item.id === note.id)
            draft.splice(index, 1);
        })
    }

    return(
        <div>
            <h1>Note App</h1>
            <NoteForm onAddNote={handleOnAddNote}/>
            <NoteList notes={notes} onChange={handleChangeNotes} onDelete={handleDeleteNote}/>
        </div>
    )
}