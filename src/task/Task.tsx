import React, { type JSX } from "react";
import { useImmer } from "use-immer";
import TaskFrom from "./TaskFrom";
import TaskList from "./TaskList";

export default function Task(): JSX.Element {
  
    const [items, setItems] = useImmer<string[]>([]) ;
    

    function handleSubmite(item: string) {
        setItems((draft) => {
            draft.push(item);
        });
    }
    return(
        <div>
           <TaskFrom onSubmite={handleSubmite}/>
           <TaskList items={items}/>
        </div>
    );
}