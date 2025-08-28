const endpointDUMMY = import.meta.env.VITE_API_URL_DUMMY;

const endpointCommentsDUMMY = endpointDUMMY + '/comments';
export const LoadCommentsDUMMY = async (): Promise<ICommentsModelDummy[]> => {
    return await fetch(endpointCommentsDUMMY)
        .then(value => value.json())
}