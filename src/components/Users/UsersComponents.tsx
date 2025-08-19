import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {getAll} from "../../services/general.api.service.ts";
import type {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";


export const UsersComponents = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getAll<IBaseResponseModel & { users: IUser[] }>('/users')
            .then(({users}) => setUsers(users));

    }, []);


    return (
        <div>

            {users.map((user) => <div key={user.id}>{user.username}</div>)}


        </div>
    );
};