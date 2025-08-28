export interface Reactions {
  likes: number;
  dislikes: number;
}

export interface PostsDummy {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}

export interface IPostsModelDummy {
  posts: PostsDummy[];
  total: number;
  skip: number;
  limit: number;
}