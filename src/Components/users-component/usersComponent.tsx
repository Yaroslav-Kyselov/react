
import UserComponent from "../user-component/UserComponent.tsx";
import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.tsx";
import {getUsers} from "../../services/api.service.ts";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {

        getUsers()
            .then(response => {
                setUsers(response);
            });
        return () => {
            console.log('Cleanup function called');
        }
    },[])
    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;