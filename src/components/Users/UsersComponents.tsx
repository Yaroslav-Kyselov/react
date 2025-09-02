import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {getAll} from "../../services/general.api.service.ts";
import {UserComponent} from "./UserComponent.tsx";
import {useSearchParams} from "react-router";


export const UsersComponents = () => {

    const [searchParams] = useSearchParams({page: '1'});

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
       const currentPage =searchParams.get('page') || '1';
        getAll(currentPage).then(({users}: IUser) => {
            setUsers(users)

        });


    }, [searchParams]);


    return (
        <div>

            {users.map((user) => <UserComponent key={user.id} user={user}/>)}


        </div>
    );
};