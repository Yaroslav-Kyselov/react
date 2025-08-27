import type {FC} from "react";
import type {ICommentsModelJson} from "../../../models/JSON/comments/ICommentsModelJson.tsx";

type CommentPropsType = {
    comment: ICommentsModelJson
}

export const JsonComment: FC<CommentPropsType> = ({comment}) => {

    return (

        <div>{comment.body}</div>
    );


}