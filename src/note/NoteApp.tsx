import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { NotesContext, NotesDispatcheContext } from "./NoteContext";




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


    return(
        <div>
            <NotesContext.Provider value={notes}>
                <NotesDispatcheContext.Provider value={dispatch}>
                    <h1>Note App</h1>
            <NoteForm/>
            <NoteList/>

                </NotesDispatcheContext.Provider>

            </NotesContext.Provider>
        </div>
    )
}