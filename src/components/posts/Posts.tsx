import './Posts.css'
import type {IPostModel} from "../../models/PostModel.tsx";
import {useEffect, useState} from "react";
import {Post} from "../post/Post.tsx";
import loadPosts from "../../servis/api.servis.ts";

export const Posts=()=> {
    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(()=>{
        loadPosts().then(value=>setPosts(value));
    },[])




    return (
        <div>
            {
                posts.map(post=><Post post={post} key={post.id}/>)

            }
        </div>
    );
}
export default Posts;