import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";




type FitureInitialNote = {
    id: number ;
    text: string;
    done: boolean;
};
let id = 0;

 const initialNotes: FitureInitialNote[] = [
    {id: id++, text: "learn HTML", done: false},
    {id: id++, text: "learn CSS", done: true},
    {id: id++, text: "learn Javascript", done: false},
    {id: id++, text: "learn ReactJS", done: false}
];

type NoteAction =
  | { type: "ADD_NOTE"; text: string }
  | { type: "CHANGE_NOTE"; id: number; text: string; done: boolean }
  | { type: "DELETE_NOTE"; id: number };



function notesReducer (notes: FitureInitialNote[], action: NoteAction) {
    if(action.type === "ADD_NOTE"){

        notes.push({
                    id: id++,
                    text: action.text,
                    done: false
                })

    }else if (action.type === "CHANGE_NOTE"){

        const index = notes.findIndex(note => note.id === action.id);
        notes[index].text = action.text;
        notes[index].done = action.done;

    }else if (action.type === "DELETE_NOTE"){

        const index = notes.findIndex(note => note.id === action.id);
        notes.splice(index, 1);

    }
}

export default function NoteApp() {
    const[notes, dispatch] = useImmerReducer( notesReducer, initialNotes);

    function handleOnAddNote(text: string) {
        dispatch({
            type: "ADD_NOTE",
            text: text
        })
       
    }

    function handleChangeNotes(note: any) {
        dispatch({
            ...note, type: "CHANGE_NOTE",
            id: note.id,
            text: note.text,
            done: note.done
        })
        
        
    }

    
    function handleDeleteNote(id: number ) {
        dispatch({
            type:  "DELETE_NOTE",
            id: id
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