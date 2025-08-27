import type {FC} from "react";
import type {ICommentModel} from "../../../models/JSON/comments/ICommentsModelJson.tsx";


type CommentPropsType = {
    comments:ICommentModel;
}
export const DummyComment:FC<CommentPropsType> = ({comments}) => {
    return (

        <div >{comments.body}</div>
    );
};