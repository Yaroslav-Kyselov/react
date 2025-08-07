import type {ICommentModel} from "./CommentsModel.tsx";

export interface ICommentsModelDummy{
    comments: ICommentModel[];
    skip: number;
    limit: number;
    total: number;
}