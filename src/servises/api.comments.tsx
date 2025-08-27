import type {ICommentsModelJson} from "../models/JSON/comments/ICommentsModelJson.tsx";
import type {ICommentsModelDummy} from "../models/DUMMY/comments/ICommentsModelDummy.tsx";


const endpointJSON = import.meta.env.VITE_API_URL_JSON;
const endpointDUMMY = import.meta.env.VITE_API_URL_DUMMY;


const endpointCommentsJSON = endpointJSON + '/comments';
export const LoadCommentsJSON = async (): Promise<ICommentsModelJson[]> => {
    return await fetch(endpointCommentsJSON)
        .then(value => value.json())

}
const endpointCommentsDUMMY = endpointDUMMY + '/comments';
export const LoadCommentsDUMMY = async (): Promise<ICommentsModelDummy[]> => {
    return await fetch(endpointCommentsDUMMY)
        .then(value => value.json())
}