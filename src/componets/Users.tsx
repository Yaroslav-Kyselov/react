import {User} from "./User.tsx";
import {useFetch} from "../hooks/useFetch.tsx";
import type {IUser} from "../models/IUser.tsx";

export const Users = () => {

    const users = useFetch<IUser[]>
    ('https://jsonplaceholder.typicode.com/users', []);

    return (
        <>
            {
                users.map((user) => <User key={user.id} user={user}/>)
            }

        </>
    );
}