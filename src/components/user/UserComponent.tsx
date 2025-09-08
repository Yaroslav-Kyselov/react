import type {FC} from "react";
import type {IUser} from "../../models/IReqResInRespons.ts";
import './user.css'

type PropsType= {
    item:IUser
}

export const UserComponent:FC<PropsType> = ({item}) => {
    return (
        <div>
            <div>{item.first_name} {item.last_name}</div>
            <img src={item.avatar} alt={item.last_name}/>

        </div>
    );
};