import type { JSX } from "react";

export default function GuestBookForm({ref,name, setName}: any): JSX.Element{
    return(
        <>
        <label htmlFor="name">Name</label><br />
        <input ref={ref} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
        </>
    )
}