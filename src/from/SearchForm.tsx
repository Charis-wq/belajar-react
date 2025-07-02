import type { JSX } from "react";

export default function SearchForm(): JSX.Element {
    return (
        <form>
            <input type="text" />
            <button onClick={(e) => {
                e.preventDefault();
                alert(" you clicked search");
            }}></button>
        </form>
    )
}