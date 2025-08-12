import {type FC, useEffect, useState} from "react";
import type {IPost} from "../../model/iPost.ts";
import {postService} from "../../servises/api.servis.ts";



type PostsTypeProps={
    userId: string
}

const PostsComponent:FC<PostsTypeProps> = ({userId}) => {

    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        if (userId) {
            postService.getAllPostsOfUserId(+userId)
                .then(value => {
                    console.log(value)
                    setPosts(value)
                });
        }


    }, [userId]);

    return (
        <div>
            {
                posts.map(value => <div key={value.id}> {value.title}</div>)

            }
        </div>
    );
};

export default PostsComponent;