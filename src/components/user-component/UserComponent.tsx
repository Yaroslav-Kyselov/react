import type {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router";
import type {FC} from "react";


type Props = {
    user: IUser;
}

export const UserComponent: FC<Props> = ({user}) => {

    const navigation = useNavigate()
    const onButtonClick = () => {
        navigation('/users/' + user.id + '/carts');
    }


    return (
        <div>
            {user.username}: {user.email}
            <button onClick={onButtonClick}> click ME
            </button>
        </div>
    );
};