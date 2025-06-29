import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.tsx";
import { StrictMode } from "react";
import Container from "./container.tsx";
import TodoList from "../todolist/todolist.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Container>
               <HelloWorld/>  
               <TodoList/> 
        </Container>
     
    </StrictMode>
    
)