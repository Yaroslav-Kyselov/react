import type {FC} from "react";
import type {CommentsDummy} from "../../../models/DUMMY/comments/ICommentsModelDummy.tsx";


type CommentPropsType = {
    comments:CommentsDummy;
}
export const DummyComment:FC<CommentPropsType> = ({comments}) => {
    return (

        <div >{comments.body}</div>
    );
};