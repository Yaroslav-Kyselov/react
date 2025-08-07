import './Comments.css'
import {useEffect, useState} from "react";
import type {ICommentModel} from "../../models/CommentsModel.tsx";
import LoadComments from "../../servis/api.servis.tsx";
import {Comment} from "../comment/Comment.tsx";

export const Comments = () => {
    const [comments, setComments] = useState<ICommentModel[]>([]);
    useEffect(() => {
        LoadComments().then(value => setComments(value))
    }, [])
    return (
        <div>
            {
                comments.map(comment => <Comment comment={comment} key={comment.id}/>)
            }

        </div>
    );
}
export default Comments;