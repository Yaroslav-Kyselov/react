import type {FC} from "react";
import type {ITodoModel} from "../../models/TodoModel.tsx";

export const Todo:FC<{ todo:ITodoModel }> = ({todo:{title, id, userId, completed}}) => {
    return (
        <div>{id} {title} {userId} {completed.toString()}</div>
    );
};