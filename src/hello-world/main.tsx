import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.tsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <HelloWorld/>
    </StrictMode>
    
)