import { useContext, type JSX } from "react";
import { ProfileContext } from "./ProfileContext";

export default function ProfileAddress(): JSX.Element {
    const profile = useContext(ProfileContext);

    return(
        <>
        <h2>Profile Address</h2>
        <p>Alamat: {profile} </p>

        </>
    )
}