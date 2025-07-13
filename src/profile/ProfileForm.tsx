import type { JSX } from "react";


export default function ProfileForm({name, setName}: any): JSX.Element{
    function handleChange(e: any){
        setName(e.target.value);
    }
    return(
        <>
        <h2>Profile Form</h2>
        <input type="text" value={name} onChange={handleChange} />
        </>
    )
}