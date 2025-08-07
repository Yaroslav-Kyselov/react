import type {ICommentModel} from "../models/CommentsModel.tsx";
import type {ICommentsModelDummy} from "../models/CommentsModelDummy.tsx";

const endpointComments = import.meta.env.VITE_API_COMMENTS + '/comments';
const LoadComments = async (): Promise<ICommentModel[]> => {

    const response: ICommentsModelDummy = await fetch(endpointComments)
        .then(value => value.json())

    return response.comments;
}
export default LoadComments;