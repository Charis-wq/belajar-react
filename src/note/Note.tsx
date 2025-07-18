import { useContext, useState } from "react";
import { NotesDispatcheContext } from "./NoteContext";


  type FitureNote = {
    note: {
        id: number;
        text: string;
        done: boolean;
    };   
    
};

export default function Note({note}: FitureNote) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(NotesDispatcheContext);

    function handleChangeText(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: "CHANGE_NOTE",
            id: note.id,
            text: e.target.value,
            done: note.done
        });
    }

    function handleChangeDone(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: "CHANGE_NOTE",
            id: note.id,
            text: note.text,
            done: e.target.checked
        });
    }

    function handleDelete() {
        dispatch({
            type: "DELETE_NOTE",
            id: note.id
        });
    }

    let component;
    if (isEditing) {
        component = (
            <>
                <input value={note.text} onChange={handleChangeText} />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        component = (
            <>
                {note.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }

    return (
        <label>
            <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
            {component}
            <button onClick={handleDelete}>Delete</button>
        </label>
    );
}
