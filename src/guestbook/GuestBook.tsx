import  { useRef, useState, type JSX } from "react";
import GuestBookForm from "./GuestBookForm";

export default function GuestBook(): JSX.Element{
    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const nameInput = useRef<any>(null);

    function handleSubmite(e: any){
        e.preventDefault();
        setName("");
        setMessage("");

        nameInput.current.focus();

        alert(`Name ${name}, Message ${message}`);
    }


    return(
        <>
        <h1>Guest Book</h1>
        <form action="">
            <GuestBookForm ref={nameInput} name={name} setName={setName}/> <br />
            <label htmlFor="message" >Message</label><br />
            <textarea name="message" value={message} onChange={(e => setMessage(e.target.value))} ></textarea><br />
            <button  onClick={handleSubmite}>Submite</button>
        </form>
        </>
    )
}