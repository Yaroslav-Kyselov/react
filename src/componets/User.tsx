import type {FC} from "react";
import type {IUser} from "../models/IUser.tsx";

type Props= {
    user:IUser
}

export const User:FC<Props> = ({user}) => {
    return (
        <>
            {
                <div>
                    {user.id} : {user.name}
                </div>

            }</>
    );
};