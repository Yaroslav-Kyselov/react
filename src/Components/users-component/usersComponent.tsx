import UserComponent from "../user-component/UserComponent.tsx";
import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.tsx";
import {getUsers} from "../../services/api.service.ts";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [item, setItem] = useState<IUser | null>(null);
    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers(response);
            });
        return () => {
            console.log('Cleanup function called');
        }
    }, [])
    const foo = (item: IUser) => {
        setItem(item);
    }

    return (
        <div>
            {
                item && <div>{JSON.stringify(item)}</div>
            }
            {
                users.map(user => <UserComponent foo={foo} key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;