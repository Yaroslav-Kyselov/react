import type {FC} from "react";
import type {ITodoModel} from "../../models/TodoModel.tsx";

export const Todo:FC<{ todo:ITodoModel }> = ({todo:{todo, id, userId, completed}}) => {
    return (
        <div>{id} {todo} {userId} {completed.toString()}</div>
    );
};