import type {FC} from "react";
import type {IUsersModelJson} from "../../../models/JSON/users/IUsersModelJson.tsx";

type UsersPropsType = {
    username: IUsersModelJson
}
export const JsonUser: FC<UsersPropsType> = ({username}) => {


    return (
        <div>
            {username.username}

        </div>
    );
};