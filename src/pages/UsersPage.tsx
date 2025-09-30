import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";

export const UsersPage = () => {

    const {users} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userSliceActions.loadUsers());
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