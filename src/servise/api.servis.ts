import type {ITodoModel} from "../models/TodoModel.tsx";
import type {ITodoModelDummy} from "../models/TodoModelDummy.tsx";


const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos';
const loadTodos = async (): Promise<ITodoModel> => {

    const response: ITodoModelDummy = await fetch(endpointTodos)
        .then(value => value.json());

  return response.todos;
}

export default loadTodos;