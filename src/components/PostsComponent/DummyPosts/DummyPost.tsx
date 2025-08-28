import type {FC} from "react";
import type {PostsDummy} from "../../../models/DUMMY/posts/IPostsModelDummy.tsx";



type UserPropsType = {
    posts:PostsDummy;
}
export const DummyPost:FC<UserPropsType> = ({posts}) => {
    return (

        <div >{posts.body}</div>
    );
};