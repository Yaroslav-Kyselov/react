import {type IPostModel} from './PostModel';

export interface PostModelDummy {
    posts: IPostModel[];
    skip: number;
    limit: number;
    total: number;
}