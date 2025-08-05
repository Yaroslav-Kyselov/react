import './Todos.css'
import type {ITodoModel} from "../../models/TodoModel.tsx";
import loadTodos from "../../servise/api.servis.ts";
import {Todo} from "../Todo/Todo.tsx";
import {useEffect, useState} from "react";

export const Todos=()=>{
    const [todos, setTodos] = useState<ITodoModel[]>([])
    useEffect(() => {
loadTodos().then(value => setTodos(value));
    }, []);

    return(
        <div>
            {

                todos.map(todo=><Todo todo={todo} key={todo.id}/>)
            }
        </div>
    );
};
export default Todos;