import type { JSX, PropsWithChildren } from "react";

export default function Container({children}: PropsWithChildren<{}>): JSX.Element {
    return(
        <div>
            <h1>Ayo Belajar</h1>
            {children}
            <footer>
                <p>@ 2025 Abdul Charis</p>
            </footer>
        </div>
    )
};