import {useEffect, useState} from "react";
import {LoadUsersDUMMY} from "../../../servises/api.DUMMY.ts";
import {DummyUser} from "./DummyUser.tsx";
import type {UsersDummy} from "../../../models/DUMMY/users/IUsersModelDummy.ts";


export const DummyUsers = () => {

    const [users, setUsers] = useState<UsersDummy[]>([]);


    useEffect(() => {
        LoadUsersDUMMY()
            .then(users => {
                setUsers(users)
            });

    }, [])


    return (
        <div>
            {

                users.map((user: UsersDummy) => <DummyUser key={user.id} users={user}/>)
            }
        </div>
    );
};