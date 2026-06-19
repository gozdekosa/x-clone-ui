export interface Comment {
  id: number;
  postId: number;
  name: string;
  username: string;
  avatar: string;
  reposts: number;
  likes: number;
  views: number;
  content: string;
  comments: number;
  createdAt: number;
}