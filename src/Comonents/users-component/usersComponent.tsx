
import UserComponent from "../user-component/UserComponent.tsx";
import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.tsx";


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
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