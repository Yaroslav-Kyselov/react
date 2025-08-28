import type {CommentsDummy} from "../../../models/DUMMY/comments/ICommentsModelDummy.tsx";
import {useEffect, useState} from "react";
import {LoadCommentsDUMMY} from "../../../servises/api.DUMMY.ts";
import {DummyComment} from "./DummyComment.tsx";


export const DummyComments = () => {

    const [comments, setComments] = useState<CommentsDummy[]>([]);


    useEffect(() => {
        LoadCommentsDUMMY()
            .then(comments => {
                setComments(comments)
            });

    }, [])


    return (
        <div>
            {

                comments.map((comment: CommentsDummy) => <DummyComment key={comment.id} comments={comment}/>)
            }
        </div>
    );
};