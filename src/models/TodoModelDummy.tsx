import type {ITodoModel} from "./TodoModel.tsx";


export interface ITodoModelDummy {
    todos: ITodoModel;
    skip: number;
    limit: number;
    total: number;
}