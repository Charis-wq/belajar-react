import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.tsx";
import { StrictMode } from "react";
import Container from "./container.tsx";
import TodoList from "../todolist/todolist.tsx";
import Table from "../table/Table.tsx";
import AlertButton from "../button/AlertButton.tsx";
import MyButton from "../button/MyButton.tsx";
import Toolbar from "../button/Toolbar.tsx";
import SearchForm from "../from/SearchForm.tsx";
import SayHelloFrom from "../from/SayHelloForm.tsx";
import Counter from "../from/Counter.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Container>
               <HelloWorld/>  
               <TodoList/> 
               <Table/>
               <AlertButton text="Click me" message="Yes Click Me"/>
               <MyButton text="Smash Me" onSmash={() => alert("You smash me!")}/>
               <Toolbar onClick={(e: React.MouseEvent) => {
                   e.stopPropagation();
                   alert("You clicked a button");
               }} />
               <SearchForm />
               <SayHelloFrom/>
               <Counter/>
                 <Counter/>
        </Container>
     
    </StrictMode>
    
)