import {useEffect, useState} from "react";
import {LoadPostsDUMMY} from "../../../servises/api.DUMMY.ts";
import {DummyPost} from "./DummyPost.tsx";
import type {PostsDummy} from "../../../models/DUMMY/posts/IPostsModelDummy.tsx";


export const DummyPosts = () => {

    const [posts, setPosts] = useState<PostsDummy[]>([]);


    useEffect(() => {
        LoadPostsDUMMY()
            .then(posts => {
                setPosts(posts)
            });

    }, [])


    return (
        <div>
            {

                posts.map((post: PostsDummy) => <DummyPost key={post.id} posts={post}/>)
            }
        </div>
    );
};