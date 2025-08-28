import type {IPostsModelJson} from "../../../models/JSON/posts/IPostsModelJson.tsx";
import {useEffect, useState} from "react";
import {LoadPostsJSON} from "../../../servises/api.JSON.tsx";
import {JsonPost} from "./JsonPost.tsx";


export const JsonPosts = () => {


    const [posts, setPosts] = useState<IPostsModelJson[]>([]);


    useEffect(() => {
        LoadPostsJSON()
            .then(posts => {
                setPosts(posts)
            });

    }, [])


    return (
        <div>
            {

                posts.map((post: IPostsModelJson) => <JsonPost key={post.id} post={post}/>)
            }
        </div>
    );
};