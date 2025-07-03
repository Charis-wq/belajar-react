import React, { useState } from "react";
import type { JSX } from "react/jsx-runtime";

type Contact = {
        name: string;
        message: string;
}

export default function ContactFrom(): JSX.Element {
    

    const [contact, setContact] = useState<Contact>({
        name: "",
        message: ""
    });

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setContact({ ...contact, name: e.target.value });
    };

    function handleMassageChange(e: React.ChangeEvent<HTMLInputElement>) {
        setContact({...contact, message: e.target.value})
    }
    return(
       <div>
        <h1>Contact From</h1>
        <form>
            <input type="text" placeholder="Name" onChange={handleNameChange} />
            <br />
             <input type="text" placeholder="Massage" onChange={handleMassageChange} />
        </form>
        <h1>Contact Detail</h1>
        <p>Name: {contact.name}</p>
        <p>Massage: {contact.message}</p>
       </div>
    )
}