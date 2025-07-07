import  { useState, type JSX } from "react";
type FitureNote = {
    note: any;
    onChange: (value: string) => void;
    onDelete: () => void;
}

export default function Note({ note, onChange, onDelete }: FitureNote): JSX.Element {
    const [isEditing, setISediting] = useState(false)

    let component;

    function handleChangeText(e: React.ChangeEvent<HTMLInputElement>) {
        const newNote = {...note, text: e.target.value};
        onChange(newNote);
    }
    if(isEditing){
        component = (
               <>
            <input value={note.text} onChange={handleChangeText}/>
            <button onClick={() => setISediting(false)}>Save</button>
            </>

        )
         

        

    }else{
        component = (
            <>
            {note.text}
            <button onClick={() =>  setISediting(true)}>Edit</button>
            </>
        )

    }

    function handleChangeDone(e: React.ChangeEvent<HTMLInputElement>) {
        const newNote = { ...note, done: e.target.checked };
        onChange(newNote);
    }

    return(
        <label>
            <input type="checkbox" checked={note.done} onChange={handleChangeDone}  />
            {component}
            <button onClick={onDelete}>Delete</button>

        </label>
    )
    
}