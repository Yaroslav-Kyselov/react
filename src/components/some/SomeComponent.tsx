import {useEffect, useState} from "react";
import {useSearchParams} from "react-router";
import type {IUser} from "../../models/IReqResInRespons.ts";
import {getAllUsers} from "../../servises/api.servis.tsx";


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

                // users.map(value => <div key={value.id}>{value.first_name}</div>)
            }
        </div>
    );
};