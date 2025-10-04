import type {IUser} from "../models/IUser.ts";
import type {FC} from "react";

export const UserComponent:FC<{user:IUser}>= ({user: {id, name, username}}) => {
    return (
        <div>
            {id} {username}
            <p>{name}</p>
        </div>
    );
}