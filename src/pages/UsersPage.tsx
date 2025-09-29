import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";

export const UsersPage = () => {

    const {users} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                dispatch(userSliceActions.loadUsers(value));
            });
    }, [])

    return (
        <div>
            {
                users.map((user) => {
                    return <div key={user.id}>{user.name}</div>
                })
            }
        </div>
    );
};