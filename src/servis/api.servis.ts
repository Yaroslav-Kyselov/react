import type {IPostModel} from "../models/PostModel.tsx";


const endpointPosts=import.meta.env.VITE_API_POSTS+'/posts';
const LoadPosts = async ():Promise<IPostModel[]> => {

    return await fetch(endpointPosts)
        .then(value => value.json())
}
export default LoadPosts;