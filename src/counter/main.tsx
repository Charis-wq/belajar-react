import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Counter2 from "./Counter2";
import CounterApp from "./CounterApp";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Counter2/>
        <CounterApp/>
    </StrictMode>

)