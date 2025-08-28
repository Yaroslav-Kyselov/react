export interface User {
  id: number;
  username: string;
  fullName: string;
}

export interface CommentsDummy {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

export interface ICommentsModelDummy {
  comments: CommentsDummy[];
  total: number;
  skip: number;
  limit: number;
}