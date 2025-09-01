import {useEffect, useState} from "react";
import {useSearchParams} from "react-router";
import type {IUser} from "../../models/IReqResInRespons.ts";
import {getAllUsers} from "../../servises/api.servis.tsx";
import {UserComponent} from "../user/UserComponent.tsx";


export const SomeComponent = () => {


    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams()
    useEffect(() => {
        const pg = query.get('pg');
        getAllUsers(pg || '1').then(value => setUsers(value.data));

    }, [query]);


    return (
        <div>
            {

                users.map(value => <UserComponent key={value.id} item={value} />)
            }
        </div>
    );
};