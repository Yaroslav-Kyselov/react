import {UserComponent} from "./UserComponent.tsx";
import {useEffect, useState} from "react";

export const UsersComponent = () => {
    console.log("users")
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);
    return (
        <div>
            UsersComponents

            <UserComponent/>
        </div>
    );
};