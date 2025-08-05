import type {ITodoModel} from "../models/TodoModel.tsx";


const endpointTodos=import.meta.env.VITE_API_BASE_URL+'/todos';
const loadTodos = async ():Promise<ITodoModel[]> => {

    return await fetch(endpointTodos)
        .then(value => value.json());

}

export default loadTodos;