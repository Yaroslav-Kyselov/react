import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {userActions} from "../redux/slices/userSlice.ts";
import type {IUser} from "../models/IUser.ts";

export const UsersPage = () => {

    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.userStoreSlice.users);
    useEffect(() => {

        dispatch(userActions.loadUsers())
    }, [dispatch]);


    return (
        <div>
            {users.map((user: IUser) => (<div key={user.id}>{user.name}</div>))}
        </div>
    );
};