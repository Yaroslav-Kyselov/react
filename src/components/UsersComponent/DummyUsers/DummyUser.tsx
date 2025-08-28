import type {FC} from "react";
import type {UsersDummy} from "../../../models/DUMMY/users/IUsersModelDummy.ts";


type UserPropsType = {
    users:UsersDummy;
}
export const DummyUser:FC<UserPropsType> = ({users}) => {
    return (

        <div >{users.firstName}</div>
    );
};