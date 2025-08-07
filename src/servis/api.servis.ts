import type {IPostModel} from "../models/PostModel.tsx";
import type {PostModelDummy} from "../models/PostModelDummy.tsx";


const endpointPosts = import.meta.env.VITE_API_POSTS + '/posts';
const LoadPosts = async (): Promise<IPostModel[]> => {

    const response: PostModelDummy = await fetch(endpointPosts)
        .then(value => value.json())

    return response.posts;
}
export default LoadPosts;