import {type FC} from 'react';
import type {IUser} from "../../models/IUser.tsx";

type UserPropType = {
    item: IUser;
}

const UserComponent:FC<UserPropType> = ({item}) => {
    return (
        <div>{item.name}</div>
    );
};

export default UserComponent;