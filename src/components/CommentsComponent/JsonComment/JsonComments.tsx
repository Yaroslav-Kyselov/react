import {useEffect, useState} from "react";

import {JsonComment} from "./JsonComment.tsx";
import type {ICommentsModelJson} from "../../../models/JSON/comments/ICommentsModelJson.tsx";
import {LoadCommentsJSON} from "../../../servises/api.JSON.tsx";

export const JsonComments = () => {

    const [comments, setComments] = useState<ICommentsModelJson[]>([]);


    useEffect(() => {
        LoadCommentsJSON()
            .then(comments => {
                setComments(comments)
            });

    }, [])


    return (
        <div>
            {

                comments.map((comment: ICommentsModelJson) => <JsonComment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};
