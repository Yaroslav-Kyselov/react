import type {IUser} from "../models/IUser.ts";

export const UserComponent = ({user}: { user: IUser }) => {
    return (
        <div>
            {user.id} {user.username}
            <p>{user.name}</p>
        </div>
    );
}