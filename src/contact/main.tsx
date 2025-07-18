import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContactFrom from "./ContactFrom";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ContactFrom/>
    </StrictMode>
)