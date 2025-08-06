import type {ICommentModel} from "../models/CommentsModel.tsx";

const endpointComments=import.meta.env.VITE_API_COMMENTS+'/comments';
const LoadComments=async ():Promise<ICommentModel> => {
    return await fetch(endpointComments)
        .then(value=>value.json())
}
export default LoadComments ;