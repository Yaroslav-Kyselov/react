export interface User {
  id: number;
  username: string;
  fullName: string;
}

export interface Comments {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

export interface ICommentsModelDummy {
  comments: Comments[];
  total: number;
  skip: number;
  limit: number;
}