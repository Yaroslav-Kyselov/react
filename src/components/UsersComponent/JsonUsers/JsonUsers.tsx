import {useEffect, useState} from "react";
import {LoadUsersJSON} from "../../../servises/api.JSON.tsx";

import type {IUsersModelJson} from "../../../models/JSON/users/IUsersModelJson.tsx";
import {JsonUser} from "./JsonUser.tsx";


export const JsonUsers = () => {


    const [users, setUsers] = useState<IUsersModelJson[]>([]);


    useEffect(() => {
        LoadUsersJSON()
            .then(users => {
                setUsers(users)
            });

    }, [])


    return (
        <div>
            {

                users.map((username: IUsersModelJson) => <JsonUser key={username.id} username={username}/>)
            }
        </div>
    );
};