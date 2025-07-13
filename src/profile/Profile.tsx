import { useContext, type JSX } from "react";
import { ProfileContext } from "./ProfileContext";

export default function Profile(): JSX.Element{
    const profile = useContext(ProfileContext);

    return(
        <>
        <h2>profile</h2>
        <p>Hello {profile}</p>
        </>
    )
}